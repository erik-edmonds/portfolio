import Link from 'next/link';
import { MouseEventHandler, LegacyRef, forwardRef, Dispatch, SetStateAction } from 'react';

type LinkType = {
  onClick: MouseEventHandler<HTMLAnchorElement>,
  href: string,
  label: string,
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const Anchor = forwardRef(({ onClick, href, label, setMenuOpened }: LinkType, ref: LegacyRef<HTMLAnchorElement>) => {

  return (
    <a href={href} onClick={() => {
      onClick;
      setMenuOpened(false)
    }} ref={ref} className="cursor-pointer text-2xl font-bold transition-colors hover:text-indigo-600">
      {label}
    </a>
  )
})

export const Menu = (props) => {
  const {  menuOpened, setMenuOpened } = props;

  return(
    <>
      <button onClick={() => setMenuOpened(!menuOpened)} className="fixed right-12 top-12 z-20 size-11 rounded-md bg-indigo-600 p-3 opacity-65">
        <div className={`h-0.5 w-full rounded-md bg-white transition-all ${menuOpened ? "translate-y-0.5  rotate-45" : ""}`}/>
        <div className={`my-1 h-0.5 w-full rounded-md bg-white ${menuOpened ? "hidden" : ""}`}/>
        <div className={`h-0.5 w-full rounded-md bg-white transition-all ${menuOpened ? "-rotate-45" : ""}`}/>
      </button>
      <div className={`backdrop-filter backdrop-blur-2xl backdrop-saturate-150 backdrop-contrast-25 bg-white/30 fixed inset-y-0 right-0 z-10 flex flex-col overflow-hidden transition-all ${menuOpened ? "w-screen" : "w-0"}`}>
        <div className="top-8 flex flex-1 flex-col gap-6 p-12">
          <nav>
            <ul>
              <li>
                <Link href="/" passHref legacyBehavior>
                  <Anchor label="Home" setMenuOpened={setMenuOpened} />
                </Link>
              </li>
              <li>
                <Link href='/slideshow' passHref legacyBehavior>
                  <Anchor label="Slideshow" setMenuOpened={setMenuOpened}/>
                </Link>
              </li>
              <li>
                <Link href="/vr" passHref legacyBehavior>
                  <Anchor label="VR" setMenuOpened={setMenuOpened}/>
                </Link>
              </li>
              <li>
                <Link href='/contact' passHref legacyBehavior>
                  <Anchor label="Contact" setMenuOpened={setMenuOpened}/>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

Anchor.displayName = "Anchor";

