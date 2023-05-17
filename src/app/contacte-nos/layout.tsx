export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
        <title>Like Blog - Contactos</title>
      </head>
          {children}
    </>
  )
}
