import { useState, useTransition } from "react";
import { type ZodType, z } from "zod";

export interface FormState<T extends ZodType> {
  success: boolean;
  data: z.infer<T> | null;
  message: string | null;
  errors: { [P in keyof z.core.output<T>]?: string[] | undefined } | null;
}

export type ActionResult<T extends ZodType> = Promise<FormState<T>>;

export type UseFormStateProps<T extends ZodType> = {
  schema: T;
  action: (data: z.infer<T>) => ActionResult<T>;
  onSuccess?: (message?: string | null) => void;
  onError?: (message?: string | null, errors?: FormState<T>["errors"]) => void;
  initialState?: FormState<T>;
};

export function useFormState<T extends ZodType>(props: UseFormStateProps<T>) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState(
    props.initialState ?? {
      success: false,
      message: null,
      errors: null,
      data: null,
    },
  );

  function execute(data: z.infer<T>) {
    startTransition(async () => {
      const resultData = props.schema.safeParse(data);

      if (!resultData.success) {
        setFormState({
          success: false,
          message: "Invalid data",
          errors: z.flattenError(resultData.error).fieldErrors,
          data: null,
        });
        if (props.onError) {
          props.onError(
            "Invalid data",
            z.flattenError(resultData.error).fieldErrors,
          );
        }
        return;
      }

      let state: FormState<T> | null = null;
      try {
        state = await props.action(resultData.data);
      } catch (error) {
        if (error instanceof Error) {
          state = {
            success: false,
            message: error.message,
            errors: null,
            data: null,
          };
        } else {
          state = {
            success: false,
            message: "An unknown error occurred",
            errors: null,
            data: null,
          };
        }
      }

      if (state.success && props.onSuccess) {
        props.onSuccess(state.message);
      }
      if (!state.success && props.onError) {
        props.onError(state.message, state.errors);
      }

      setFormState(state);
    });
  }

  return { formState, isPending, execute };
}
