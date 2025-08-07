import { SocialLink } from '@/types/social-link'

type FooterLinks =  {
    businessName: string
    address: string
    socialLinks: SocialLink[]
}

export const footerData: FooterLinks = {
    businessName: 'אבי שירותי חשמל ושיפוצים',
    address: 'דרך השלום 45, תל אביב, 6789100, ישראל',
    socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/' },
        { platform: 'Instagram', url: 'https://www.instagram.com/' },
        { platform: 'X', url: 'https://www.x.com/' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/feed/' }
    ]}
