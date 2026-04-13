import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Home, GraduationCap, BookOpen, Briefcase, FileText, Menu, X, CreditCard, Download, LogOut, LogIn, ChevronDown, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import AppLogo from '@/components/AppLogo';
import { useAuth } from '@/hooks/useAuth';

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { displayName, isAdmin, isAuthenticated, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/grades', icon: GraduationCap, label: 'Grades' },
    { path: '/matric', icon: FileText, label: 'Matric' },
    { path: '/notes', icon: BookOpen, label: 'Notes' },
    { path: '/books', icon: Download, label: 'Books' },
    { path: '/webrtc', icon: Video, label: 'Live Call' },
    { path: '/career-simulator', icon: Briefcase, label: 'Career' },
    ...(isAdmin ? [{ path: '/dashboard', icon: User, label: 'Dashboard' }] : []),
  ];

  const mobileAccountItems = [
    ...(isAuthenticated ? [{ path: '/profile', icon: User, label: 'Profile' }] : []),
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.12] bg-purple-950/90 px-3 py-2 shadow-[0_10px_35px_rgba(10,10,30,0.35)] backdrop-blur-xl sm:px-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          {/* Mobile Sheet Navigation */}
          <div className="min-[900px]:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/85 hover:bg-white/12 hover:text-white"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] bg-purple-950 border-white/10 p-0">
                <SheetHeader className="border-b border-white/10 p-4">
                  <div className="pr-10">
                    <AppLogo />
                  </div>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetClose className="absolute right-4 top-4 text-white/70 hover:text-white">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col p-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      variant={isActive(item.path) ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                      className={`justify-start h-12 text-base ${
                        isActive(item.path)
                          ? 'bg-white/20 text-white'
                          : 'text-white/85 hover:bg-white/12 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Button>
                  ))}
                  {mobileAccountItems.map((item) => (
                    <Button
                      key={item.path}
                      variant={isActive(item.path) ? 'secondary' : 'ghost'}
                      size="sm"
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                      className={`justify-start h-12 text-base ${
                        isActive(item.path)
                          ? 'bg-white/20 text-white'
                          : 'text-white/85 hover:bg-white/12 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Button>
                  ))}
                  {isAuthenticated ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSignOut}
                      className="justify-start h-12 text-base text-white/85 hover:bg-white/12 hover:text-white"
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      Sign Out
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        navigate('/login');
                        setIsOpen(false);
                      }}
                      className="justify-start h-12 text-base text-white/85 hover:bg-white/12 hover:text-white"
                    >
                      <LogIn className="h-5 w-5 mr-3" />
                      Sign In
                    </Button>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="min-w-0 rounded-2xl transition-opacity hover:opacity-90"
          >
            <AppLogo compact className="min-[1120px]:hidden" />
            <AppLogo className="hidden min-[1120px]:flex" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden min-[900px]:flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => navigate(item.path)}
              className={`shrink-0 px-2.5 ${
                isActive(item.path)
                  ? 'bg-white/20 text-white'
                  : 'text-white/85 hover:bg-white/12 hover:text-white'
              }`}
            >
              <item.icon className="h-4 w-4 min-[1120px]:mr-1.5" />
              <span className="hidden min-[1120px]:inline">{item.label}</span>
            </Button>
          ))}
        </nav>

        {/* Right side - Account */}
        <div className="flex shrink-0 items-center gap-1">
          <LanguageSwitcher />
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isActive('/profile') ? 'secondary' : 'ghost'}
                  size="sm"
                  className={`max-w-[220px] font-medium ${
                    isActive('/profile')
                      ? 'bg-white/20 text-white'
                      : 'text-white/95 hover:bg-white/12 hover:text-white'
                  } px-2 sm:px-3`}
                >
                  <User className="h-4 w-4 shrink-0 sm:mr-1.5" />
                  <span className="hidden max-w-[120px] truncate sm:inline">
                    {displayName}
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4 shrink-0 text-white/70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 border-white/15 bg-purple-950/95 text-white backdrop-blur-xl"
              >
                <DropdownMenuLabel className="truncate text-white">
                  {displayName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem
                  onClick={() => navigate('/profile')}
                  className="cursor-pointer text-white/85 focus:bg-white/12 focus:text-white"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="cursor-pointer text-white/85 focus:bg-white/12 focus:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/login')}
              className="font-medium text-white/95 hover:bg-white/12 hover:text-white px-2 sm:px-3"
            >
              <LogIn className="h-4 w-4 shrink-0 sm:mr-1.5" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
