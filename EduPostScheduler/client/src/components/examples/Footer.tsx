import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-end">
      <Footer 
        onNavigate={(page) => console.log(`Navigate to ${page}`)}
      />
    </div>
  );
}