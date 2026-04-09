import { useState, useEffect, useCallback } from 'react'
import './Gallery.css'

// Simple gallery with lightbox
const GL_IMAGES = [
  { id: 1, src: 'gallery1.jpg', caption: 'Classroom interaction' },
  { id: 2, src: 'gallery2.jpg', caption: 'Science lab in action' },
  { id: 3, src: 'gallery3.jpg', caption: 'Students presenting' },
  { id: 4, src: 'gallery4.jpg', caption: 'Extracurricular activity' },
  { id: 5, src: 'gallery5.jpg', caption: 'Robotics club' },
  { id: 6, src: 'gallery6.jpg', caption: 'Sports day' },
]

function Lightbox({images, index, onClose}) {
  const [i, setI] = useState(index)
  useEffect(() => setI(index), [index])
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setI((v)=> Math.min(v+1, images.length-1))
      if (e.key === 'ArrowLeft') setI((v)=> Math.max(v-1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, onClose])
  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-content" onClick={(e)=>e.stopPropagation()}>
        <img className="lb-image" src={process.env.PUBLIC_URL + '/' + images[i].src} alt="gallery" />
        <div className="lb-caption">{images[i].caption}</div>
        <button className="lb-close" onClick={onClose}>×</button>
        <button className="lb-nav lb-prev" onClick={()=>setI(Math.max(i-1,0))}>‹</button>
        <button className="lb-nav lb-next" onClick={()=>setI(Math.min(i+1, images.length-1))}>›</button>
      </div>
    </div>
  )
}

export default function Gallery(){
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const openLB = useCallback((n)=>{ setIdx(n); setOpen(true) }, [])
  const closeLB = ()=>setOpen(false)
  return (
    <section className="gallery" id="gallery-area">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery: Life at School</h2>
        <div className="gallery-grid">
          {GL_IMAGES.map((g, k) => (
            <div className="gallery-card" key={g.id} onClick={()=>openLB(k)}>
              <img src={process.env.PUBLIC_URL + '/' + g.src} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
      {open && <Lightbox images={GL_IMAGES} index={idx} onClose={closeLB} />}
    </section>
  )
}

function LightboxWrapper(props){ return null }
