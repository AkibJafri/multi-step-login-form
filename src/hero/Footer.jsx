import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaPinterest,
  FaFacebook,
} from 'react-icons/fa6'

const Footer = () => {
  const socialLinks = [
    { label: 'Dribbble', icon: FaDribbble },
    { label: 'Twitter', icon: FaXTwitter },
    { label: 'Facebook', icon: FaFacebook },
    { label: 'Pinterest', icon: FaPinterest },
    { label: 'Instagram', icon: FaInstagram },
  ]

  const links = [
    [
      { label: 'For designers', key: 'header-1' },
      { label: 'Go Pro!', key: 'item-1-1' },
      { label: 'Explore design work', key: 'item-1-2' },
      { label: 'Overtime podcast', key: 'item-1-3' },
      { label: 'Playoffs', key: 'item-1-4' },
      { label: 'Weekly Warm-Up', key: 'item-1' },
      { label: 'Refer a Friend', key: 'item-1-5' },
      { label: 'Code of Conduct', key: 'item-1-5' },
    ],
    [
      { label: 'Hire Designers', key: 'header-2' },
      { label: 'Post a job opening', key: 'item-2-1' },
      { label: 'Post a freelance project', key: 'item-2-2' },
      { label: 'Search for designer', key: 'item-2-3' },
      { label: 'Brands', key: 'header-2' },
      { label: 'Advertise With us', key: 'item-2-5' },
    ],
    [
      { label: 'Company', key: 'header-2' },
      { label: 'About', key: 'item-2-1' },
      { label: 'Careers', key: 'item-2-2' },
      { label: 'Support', key: 'item-2-3' },
      { label: 'Media kit', key: 'item-2-4' },
      { label: 'Testimonials', key: 'item-2-5' },
      { label: 'API', key: 'item-2-5' },
      { label: 'Terms of service', key: 'item-2-6' },
      { label: 'Privacy policy', key: 'item-2-6' },
      { label: 'Cookie policy', key: 'item-2-7' },
    ],
    [
      { label: 'Directories', key: 'header-2' },
      { label: 'Designers for hiere', key: 'item-2-1' },
      { label: 'Freelance designers for hire', key: 'item-2-2' },
      { label: 'Tages', key: 'item-2-3' },
      { label: 'Places', key: 'item-2-4' },
      { label: 'Design assest', key: 'header-1' },
      { label: 'Dribble MArketplace', key: 'item-2' },
      { label: 'Creative Market', key: 'item-2' },
      { label: 'Fontspring', key: 'item-2' },
      { label: 'Font Squirrel', key: 'item-2' },
    ],
    [
      { label: 'Design Resources', key: 'header-2' },
      { label: 'Freelancing', key: 'item-2-1' },
      { label: 'Design Hiring', key: 'item-2-2' },
      { label: 'Design Portfolio', key: 'item-2-3' },
      { label: 'Design Education', key: 'item-2-4' },
      { label: 'Creative Process', key: 'item-2-5' },
      { label: 'Design Industry Trends', key: 'item-2-5' },
    ],
  ]

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="py-8 grid  grid-cols-1 text-white w-screen px-8 relative">
        <div>
          <div className="footer-img flex items-center">
            <img
              src="/logo.png"
              alt=""
              className="w-auto h-[6rem] object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm mb-5">
            Dribble is the world's leading <br />
            community for creatives to share, grow,
            <br /> and get hired.
          </p>

          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-auto h-6 mb-7 text-gray-400 hover:text-green-900 cursor-pointer"
                />
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-5 w-[100%]">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`cursor-pointer ${
                        link.key === 'header-1' || link.key === 'header-2'
                          ? 'text-black text-sm font-semibold mb-2'
                          : ' text-gray-500 text-sm mb-2'
                      }`}
                    >
                      {link.label}
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </div>
        <div className="infos text-gray-400 text-sm justify-between flex">
          <span>© 2023 Dribble. All rights reserved</span>
          <span className="text-black font-semibold">
            20,501,853
            <span className="text-gray-400 font-normal"> Shorts dribbled</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
