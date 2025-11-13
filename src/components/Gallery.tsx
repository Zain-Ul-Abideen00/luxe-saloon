export const Gallery = () => {
    const galleryImages = [
        {
            id: 1,
            alt: "Elegant hair styling",
            category: "Hair",
            src: "https://plus.unsplash.com/premium_photo-1661668935701-2429eb4da878?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            alt: "Professional coloring",
            category: "Color",
            src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop&q=80",
        },
        {
            id: 3,
            alt: "Relaxing spa treatment",
            category: "Spa",
            src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=800&fit=crop&q=80",
        },
        {
            id: 4,
            alt: "Beautiful nail art",
            category: "Nails",
            src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=800&fit=crop&q=80",
        },
        {
            id: 5,
            alt: "Bridal styling",
            category: "Special",
            src: "https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            alt: "Modern cuts",
            category: "Hair",
            src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop&q=80",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Work
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover the artistry and expertise that defines our
                        salon
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative group overflow-hidden rounded-lg aspect-square hover-lift animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/90 via-dark-chocolate/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <span className="text-light-tan text-sm font-medium uppercase tracking-wide mb-1 block">
                                        {image.category}
                                    </span>
                                    <p className="text-white font-semibold text-lg">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
