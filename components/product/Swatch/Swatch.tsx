
import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from '@components/icons'
import cn from "classnames"
import { isDark } from "@lib/color"

interface Props {
  power?: "1000" | "1500" | "2000"
  color?: string
  label?: string
  active?: boolean
  variant?: "power" | "color" | string
  onClick: () => void
}


const Swatch: FC<Props> = ({
  color, label, variant, active,
  power="1000",
  ...rest
}) => {
 
  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  const rootClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.color]: color,
      [s.power]: variant === "power",
      [s.dark]: color && isDark(color),
      [s.sm]: power === "1000"
    }
  )

  return (
    <button
      style={color ? {backgroundColor: color} : {}}
      className={rootClassName}
      {...rest}
    >
      { variant === "color" && active &&
        <span>
          <Check />
        </span>
      }
      { variant === "power" ? label : null }
    </button>
  )
}


export default Swatch
