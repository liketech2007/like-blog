export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      <head>
        <title>Like Blog - Sobre nós</title>
      </head>
          {children}
    </>
  )
}
