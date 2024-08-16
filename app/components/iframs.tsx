'use client'
import IframeResizer from '@iframe-resizer/react'

export const Iframs = ()  => {
  return (
    <div className="min-h-full  ">
      <IframeResizer src="https://embed-v2.testimonial.to/w/space-13?&horizontal=on&theme=dark&shadowColor=ffffff&speed=0.75&rows=1&tag=all" height={"700px"} style={{ minHeight : "100%", minWidth : "100%" }} license={''} />
      </div>
  )
}

export default Iframs


// <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
// <iframe  id='testimonialto-space-13-tag-all-dark-animated' src="https://embed-v2.testimonial.to/w/space-13?animated=on&horizontal=on&theme=dark&shadowColor=ffffff&speed=0.75&rows=1&tag=all&disableHoverPause&showHeartAnim" frameborder="0" scrolling="no" width="100%"></iframe>
// <script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, '#testimonialto-space-13-tag-all-dark-animated');</script>