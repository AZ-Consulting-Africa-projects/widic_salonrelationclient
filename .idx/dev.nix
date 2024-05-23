{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.sudo
    pkgs.openssl
    pkgs.libssh2
  ];
  idx.extensions = [
    
  
 "bradlc.vscode-tailwindcss"
 "formulahendry.auto-close-tag"
 "formulahendry.auto-complete-tag"
 "formulahendry.auto-rename-tag"
 "lightyen.tailwindcss-intellisense-twin"
 "PKief.material-icon-theme"
 "Prisma.prisma"
 "Prisma.prisma-insider"
 "redwan-hossain.auto-rename-tag-clone"
 "steoates.autoimport"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}