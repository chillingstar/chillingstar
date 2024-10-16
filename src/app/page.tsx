"use client";

import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, Image, Spacer, Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, NotebookPen, Hammer, Info, MessageCircle } from 'lucide-react';
import { siTypescript, siJavascript, siNodedotjs, siNextdotjs, siReact, siArchlinux, siNvidia, siAndroid, siGit, siGithub, siDocker, siDavinciresolve, siTelegram, siDiscord, siOsu, siYoutube, siSteam, siTiktok, siBun, siNextui, siCloudflarepages, siVercel } from 'simple-icons/icons';

const icons = [siTypescript, siJavascript, siNodedotjs, siNextdotjs, siReact, siGit, siGithub, siDocker, siDavinciresolve];
const svgUrl = (icon: { svg: string }) => `data:image/svg+xml;utf8,${encodeURIComponent(icon.svg)}`;

const getIconClass = (theme: string) => theme === 'dark' ? 'invert' : '';

/**
 * The `Home` component is the main page of the application. It handles theme toggling between light and dark modes
 * based on the system's color scheme preference. It also displays a card with various sections including an avatar,
 * information about the developer, technologies and tools used, device specifications, and social media links.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * ```tsx
 * import Home from './path/to/Home';
 * 
 * function App() {
 *   return <Home />;
 * }
 * ```
 *
 * @remarks
 * - The component uses `useState` to manage the theme and loading state.
 * - The `useEffect` hook is used to set the initial theme based on the system's preference.
 * - The `toggleTheme` function toggles between light and dark themes.
 * - The component includes various UI elements such as `Button`, `Card`, `Accordion`, and `Image`.
 * - Social media buttons open respective links in a new tab.
 */
export default function Home() {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
        document.documentElement.classList.toggle('light', systemTheme === 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        document.documentElement.classList.toggle('light', newTheme === 'light');
    };

    return (
        <main>
            <div className='flex absolute bottom-6 left-1/2 transform -translate-x-1/2'>
                <Button onClick={toggleTheme}>{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</Button>
            </div>

            <div className="flex justify-center items-center h-screen">
                <Card className='max-w-[780px] min-w-[780px]'>
                    <CardHeader className="flex justify-center">
                        {isLoading && <Spinner />}
                        <Image 
                            isBlurred
                            src='https://avatars.githubusercontent.com/u/72331969?s=96'
                            alt='Avatar'
                            width={96}
                            height={96}
                            radius='full'
                            onLoad={() => setIsLoading(false)}
                            className={isLoading ? 'hidden' : 'block'}
                        />
                    </CardHeader>
                    <h1 className='font-bold text-center'>ChillingStar</h1>
                    <CardBody>
                        <Accordion variant='splitted'>
                            <AccordionItem key={1} aria-label='About me' title={<div className='flex'><NotebookPen className='mr-1'/> About me</div>}>
                                <p>Hiya!, I&apos;m ChillingStar.</p>
                                <p>I&apos;m a full-stack developer who loves to code and learn new things.</p>
                            </AccordionItem>
                            <AccordionItem key={2} aria-label='Technologies & Tools' title={<div className='flex'><Hammer className='mr-1'/> Technologies & Tools</div>}>
                                <div className='flex justify-center items-center self-center space-x-2'>
                                    {icons.map((icon, index) => (
                                        <Image 
                                            key={index}
                                            src={svgUrl(icon)} 
                                            alt={icon.title}
                                            radius='none'
                                            width={32} 
                                            height={32} 
                                            className={getIconClass(theme)}
                                            style={{ transition: 'filter 0.3s, transform 0.3s' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        />
                                    ))}
                                </div>
                            </AccordionItem>
                            <AccordionItem key={3} aria-label='Info' title={<div className='flex'><Info className='mr-1'/> Info</div>}>
                                <div className="flex flex-col md:flex-row justify-between">
                                    <Card className="flex-1 m-2">
                                        <CardHeader><h2 className="font-bold">Laptop</h2></CardHeader>
                                        <CardBody>
                                            <p>Ram: 16GB DDR4 3200 Mhz</p>
                                            <p>Storage: 512GB HDD + 256GB SSD</p>
                                            <p>GPU: <span className='inline-flex items-center'><Image src={svgUrl(siNvidia)} alt={siNvidia.title} radius='none' width={16} height={16} className={getIconClass(theme)} />NVIDIA GeForce GTX 1050</span></p>
                                            <p>Operating System: <span className="inline-flex items-center"><Image src={svgUrl(siArchlinux)} alt={siArchlinux.title} radius='none' width={16} height={16} className={getIconClass(theme)} /> Arch Linux</span></p>
                                        </CardBody>
                                    </Card>
                                    <Spacer />
                                    <Card className="flex-1 m-2">
                                        <CardHeader><h2 className="font-bold">Phone</h2></CardHeader>
                                        <CardBody>
                                            <p>Phone Model: ZTE 8050</p>
                                            <p>Processor: ARM Unisoc @ 1.61 GHz </p>
                                            <p>Ram: 8GB</p>
                                            <p>Storage: 256GB</p>
                                            <p>Operating System: <span className='inline-flex items-center'><Image src={svgUrl(siAndroid)} alt={siAndroid.title} radius='none' width={16} height={16} className={getIconClass(theme)} />Android 13</span></p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </AccordionItem>
                            <AccordionItem key={4} aria-label='Social Media' title={<div className='flex'><MessageCircle className='mr-1'/>Social Media</div>}>
                                <div className="flex justify-center space-x-2">
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5865F2'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://discordapp.com/users/1245349618905255946', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siDiscord)} alt={siDiscord.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>Discord</span>
                                        </span>
                                    </Button>
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#26A5E4'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://t.me/Azphyre', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siTelegram)} alt={siTelegram.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>Telegram</span>
                                        </span>
                                    </Button>
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF66AA'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://osu.ppy.sh/users/35650471', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siOsu)} alt={siOsu.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>osu!</span>
                                        </span>
                                    </Button>
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF0000'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://youtube.com/@itzchillingstar', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siYoutube)} alt={siYoutube.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>YouTube</span>
                                        </span>
                                    </Button>
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#181717'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://github.com/chillingstar', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siGithub)} alt={siGithub.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>GitHub</span>
                                        </span>
                                    </Button>
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://steamcommunity.com/id/chillingstar', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siSteam)} alt={siSteam.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>Steam</span>
                                        </span>
                                    </Button>
                                    <Button 
                                        variant='shadow' 
                                        size='md' 
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2828cf'} 
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''} 
                                        onClick={() => window.open('https://tiktok.com/@notchillingstar', '_blank')}
                                    >
                                        <span className='inline-flex items-center'>
                                            <Image src={svgUrl(siTiktok)} alt={siTiktok.title} radius='md' width={16} height={16} className={getIconClass(theme)} />
                                            <span className='ml-1'>TikTok</span>
                                        </span>
                                    </Button>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </CardBody>
                    <CardFooter>
                        <div className="flex flex-col justify-center items-center w-full space-y-2">
                            <p>Made with <span role='img' aria-label='heart'>❤️</span> by ChillingStar</p>
                            <p>Proudly made using <span className='inline-flex items-center'><Image src={svgUrl(siNextdotjs)} alt={siNextdotjs.title} radius='none' width={16} height={16} className={getIconClass(theme)} /><span className='ml-1'>Next.js</span></span>, <span className='inline-flex items-center'><Image src={svgUrl(siBun)} alt={siBun.title} radius='none' width={16} height={16} className={ getIconClass(theme)} /><span className='ml-1'>Bun.js</span></span>, and supercharged with <span className='inline-flex items-center'><Image src={svgUrl(siNextui)} alt={siNextui.title} radius='none' width={16} height={16} className={getIconClass(theme)} /><span className='ml-1'>NextUI</span></span>.</p>
                            <p>Deployed by <span className='inline-flex items-center'><Image src={svgUrl(siVercel)} alt={siVercel.title} radius='none' width={16} height={16} className={getIconClass(theme)} /><span className='ml-1'>Vercel</span></span>.</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
