const TextPrimary: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <p className={`text-primary text-${color}`}>{children}</p>
  )
}

export default TextPrimary;