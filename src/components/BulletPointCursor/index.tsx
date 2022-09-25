import { useEffect, useRef, useState } from "react";

import { iBulletPointCursorAttributes } from "./interface";
import { StyledBulletPointCursor } from "./styles";

const maxFrameRate = 5;
let currentFrame = 0;

const BulletPointCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorAttributes, setCursorAttributes] = useState<iBulletPointCursorAttributes>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateAttributesOnMouseMove = (evt: MouseEvent) => {
      const { clientX, clientY } = evt
      evt.stopPropagation();

      /**
       * Update after maxFrameRate frames ticks
       */
      if(currentFrame > maxFrameRate){
        setCursorAttributes({
          x: clientX,
          y: clientY,
        })
        currentFrame = 0;
      }else currentFrame++
    }

    document?.addEventListener('mousemove', updateAttributesOnMouseMove)

    return () => {
      document?.removeEventListener('mousemove', updateAttributesOnMouseMove)
    }
  }, [])

  return (
    <StyledBulletPointCursor
      ref={cursorRef}
      {...cursorAttributes}
    />
  )
}

export default BulletPointCursor;