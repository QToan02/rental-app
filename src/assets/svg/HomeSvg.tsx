import React from 'react'
import Svg, { Path, PathProps } from 'react-native-svg'
import { SVGProps } from './types'
import Animated, { AnimatedProps } from 'react-native-reanimated'
// import { View } from 'react-native';

const AnimatedPath = Animated.createAnimatedComponent(
  Path
) as any as React.ComponentClass<AnimatedProps<PathProps & { style?: any }>>

Animated.addWhitelistedNativeProps({
  stroke: true,
})

const HomeSVG = ({ color }: SVGProps) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20">
      <AnimatedPath
        d="M6.98398 18.7733V15.7156C6.98398 14.9351 7.65492 14.3023 8.48256 14.3023H11.508C11.9055 14.3023 12.2866 14.4512 12.5677 14.7162C12.8487 14.9813 13.0066 15.3408 13.0066 15.7156V18.7733C13.0041 19.0978 13.139 19.4099 13.3814 19.6402C13.6239 19.8705 13.9537 20 14.2978 20H16.3619C17.3259 20.0023 18.2513 19.6428 18.9339 19.0008C19.6164 18.3588 20 17.487 20 16.5778V7.86685C20 7.13246 19.6548 6.43584 19.0575 5.96467L12.0358 0.675869C10.8144 -0.251438 9.06433 -0.221498 7.87936 0.746979L1.01791 5.96467C0.392359 6.42195 0.0184761 7.12063 0 7.86685V16.5689C0 18.4638 1.62882 20 3.63808 20H5.65504C6.36971 20 6.95052 19.4562 6.9557 18.7822L6.98398 18.7733Z"
        fill={color}
      />
    </Svg>
  )
}
export default HomeSVG
