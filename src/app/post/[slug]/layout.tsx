export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
        <title>Post</title>
      </head>
          {children}
    </>
  )
}
