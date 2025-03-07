// NAVBAR LINK
const links = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Services', path: '#service' },
  { name: 'Portfolio', path: '#portfolio' },
  { name: 'Contact', path: '#contact', mobileOnly: true }, // Hanya ditampilkan di mobile
];

const Navbar = ({ mobile, onClose, className, hideMobileItems }) => {
  
  // FUNGSI UNTUK MEMANGGIL BUTTON NAVBAR
  const handleLinkClick = (e) => {
    if (onClose) {
      onClose();
    }
  };

  // FILTER TAUTAN UNTUK DESKTOP (SEMBUNYIKAN ITEM KHUSUS MOBILE JIKA DIMINTA)
  const filteredLinks = hideMobileItems
    ? links.filter(link => !link.mobileOnly)
    : links;

  return (
    <nav className={`flex ${mobile ? "flex-col min-w-40" : "space-x-6"} ${className || ""}`}>
      {filteredLinks.map((link) => (
        <a
          key={link.path}
          href={link.path}
          onClick={handleLinkClick}
          className={`relative group px-2 py-2 font-extrabold transition-colors
            ${
              mobile
                ? "text-zinc-300 hover:text-orange-400"
                : "text-zinc-400 hover:text-zinc-100"
            }`}
        >
          {link.name}
          {/* GARIS BAWAH ANIMASI (DESKTOP ONLY) */}
          <span className="max-sm:hidden absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;