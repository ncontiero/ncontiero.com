import type { Project } from "contentlayer/generated";
import type { Locale, Sections } from "@/i18n/types";

export type HomeSectionTypes = Sections["home"];
export type AboutMeSectionTypes = Sections["about"];
export type ProjectsSectionTypes = Sections["projects"] & { locale: Locale };
export type ContactSectionTypes = Sections["contact"];
export type SectionsTypes = Sections;
export type ProjectType = Project;
