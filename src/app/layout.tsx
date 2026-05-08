export default function RootLayout({
  children,
}: LayoutProps<"/">): LayoutProps<"/">["children"] {
  return children;
}
