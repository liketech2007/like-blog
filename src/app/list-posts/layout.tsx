export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
        <title>Like Blog - Artigos</title>
      </head>
          {children}
    </>
  )
}
