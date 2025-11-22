export default function Home(){
 return (
  <div className='min-h-screen flex items-center justify-center'>
    <div className='text-center space-y-4'>
      <h1 className='text-4xl font-bold'>Zertteu.MATH Lab</h1>
      <p className='text-lab-muted max-w-lg mx-auto'>Қазақ тіліндегі интерактивті математика зертханасы</p>
      <a href='/lab' className='px-6 py-3 rounded-xl bg-lab-green/20 border border-lab-green hover:shadow-lg'>Зертханаға кіру</a>
    </div>
  </div>
 );
}