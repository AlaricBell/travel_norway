const TextSecondary: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <p className={`text-secondary text-${color}`}>{children}</p>
  )
}

export default TextSecondary;