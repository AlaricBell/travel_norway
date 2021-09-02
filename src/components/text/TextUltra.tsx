const TextUltra: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <h2 className={`text-ultra text-${color}`}>{children}</h2>
  )
}

export default TextUltra;