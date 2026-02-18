export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Copyright © {year} Zenny. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
