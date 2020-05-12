import { forwardRef, useImperativeHandle, useMemo, ForwardRefExoticComponent } from 'react'

export const wrapEffect = (effectImpl: any): ForwardRefExoticComponent<typeof effectImpl> => {
  type EffectType = typeof effectImpl

  return forwardRef<any, EffectType>((props, ref) => {
    const effect = useMemo(() => new effectImpl(...props), [props])

    useImperativeHandle(
      ref,
      () => {
        return effect
      },
      [effect]
    )

    return null
  })
}