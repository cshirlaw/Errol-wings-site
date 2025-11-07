export default function DebugImages() {
  const imgs = [
    '/images/errol-wings-12-front.jpg',
    '/images/errol-wings-12-back.jpg',
    '/images/errol-wings-3-front.jpg',
  ];
  return (
    <div style={{padding:20}}>
      {imgs.map(src => (
        <div key={src} style={{marginBottom:20}}>
          <div style={{fontFamily:'monospace', fontSize:12}}>{src}</div>
          <img src={src} alt={src} style={{maxWidth:360, border:'1px solid #ddd', borderRadius:8}} />
        </div>
      ))}
    </div>
  );
}
