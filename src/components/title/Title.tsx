import React from 'react'

type TTitleProps = {
    children: React.ReactNode;
    className?: string;
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    fontSize: number
}

const Title = ({children, className, heading, fontSize}: TTitleProps) => {
  const HeadingSize = heading;
  return (
    <HeadingSize className={className} style={{fontSize}} data-testid="title-component">
        {children}
    </HeadingSize>
  )
}

export default Title