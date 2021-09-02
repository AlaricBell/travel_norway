const HeaderTitle: React.FC<{children: any, color: string}> = ({children, color}) => {
  return (
    <div className="header-title">
      <h2 className={`text-header text-${color} text-center`}>{children}</h2>
    </div>

  )
}

export default HeaderTitle;