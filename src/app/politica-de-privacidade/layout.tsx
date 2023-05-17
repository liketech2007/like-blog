export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
        <title>Like Blog - Política de Privacidade</title>
      </head>
          {children}
    </>
  )
}
