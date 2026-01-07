import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import horaceWechatQR from "../../public/assets/qr-horace-wechat.jpg";
import horaceWhatsappQR from "../../public/assets/qr-horace-whatsapp.jpg";
import horaceViberQR from "../../public/assets/qr-horace-viber.jpg";
import rachelWechatQR from "../../public/assets/qr-rachel-wechat.jpg";
import rachelWhatsappQR from "../../public/assets/qr-rachel-whatsapp.jpg";
import rachelViberQR from "../../public/assets/qr-rachel-viber.jpg";
import horacePhoto from "../../public/assets/founder.jpg";
import rachelPhoto from "../../public/assets/rachel-photo.jpg";

interface ContactPerson {
  name: string;
  title: string;
  email: string;
  mobile: string;
  photo: StaticImageData;
  whatsappQR: StaticImageData;
  viberQR: StaticImageData;
  wechatQR: StaticImageData;
}

const contacts: ContactPerson[] = [
  {
    name: "Horace Hu",
    title: "CEO and Founder",
    email: "horace@tedlighting.com",
    mobile: "+86 186 7610 7196",
    photo: horacePhoto,
    whatsappQR: horaceWhatsappQR,
    viberQR: horaceViberQR,
    wechatQR: horaceWechatQR,
  },
  {
    name: "Rachel Fan",
    title: "Sales Director",
    email: "rachel@tedlighting.com",
    mobile: "+86 137 9071 4860",
    photo: rachelPhoto,
    whatsappQR: rachelWhatsappQR,
    viberQR: rachelViberQR,
    wechatQR: rachelWechatQR,
  },
];

export function PersonalContactsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <span className="section-label">Direct Contact</span>
          <h2 className="heading-lg mb-4">Get in Touch Personally</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Connect with our team directly through your preferred messaging platform. 
            Scan the QR codes below or use our contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((person, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-card border border-border/50"
            >
              {/* Person Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                <Image 
                  src={person.photo} 
                  alt={person.name}
                  width={56}
                  height={56}
                  className={`w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-md ${person.name === "Horace Hu" ? "object-[center_25%]" : ""}`}
                />
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-1">{person.name}</h3>
                  <p className="text-primary font-medium">{person.title}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${person.email}`} 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mobile</p>
                    <a 
                      href={`tel:${person.mobile}`} 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {person.mobile}
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Codes Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center group cursor-pointer">
                  <div className="bg-background rounded-xl p-3 mb-2 aspect-square flex items-center justify-center border border-border/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#25D366]/20 group-hover:border-[#25D366]/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#25D366]/0 group-hover:from-[#25D366]/5 group-hover:to-[#25D366]/10 transition-all duration-300" />
                    <Image 
                      src={person.whatsappQR} 
                      alt={`${person.name} WhatsApp QR`}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1 transition-all duration-300 group-hover:scale-105">
                    <MessageCircle className="h-3 w-3 text-[#25D366] transition-transform duration-300 group-hover:rotate-12" />
                    <span className="text-xs text-muted-foreground group-hover:text-[#25D366] transition-colors duration-300">WhatsApp</span>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-background rounded-xl p-3 mb-2 aspect-square flex items-center justify-center border border-border/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#7360F2]/20 group-hover:border-[#7360F2]/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7360F2]/0 to-[#7360F2]/0 group-hover:from-[#7360F2]/5 group-hover:to-[#7360F2]/10 transition-all duration-300" />
                    <Image 
                      src={person.viberQR} 
                      alt={`${person.name} Viber QR`}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1 transition-all duration-300 group-hover:scale-105">
                    <MessageCircle className="h-3 w-3 text-[#7360F2] transition-transform duration-300 group-hover:rotate-12" />
                    <span className="text-xs text-muted-foreground group-hover:text-[#7360F2] transition-colors duration-300">Viber</span>
                  </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="bg-background rounded-xl p-3 mb-2 aspect-square flex items-center justify-center border border-border/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#07C160]/20 group-hover:border-[#07C160]/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#07C160]/0 to-[#07C160]/0 group-hover:from-[#07C160]/5 group-hover:to-[#07C160]/10 transition-all duration-300" />
                    <Image 
                      src={person.wechatQR} 
                      alt={`${person.name} WeChat QR`}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1 transition-all duration-300 group-hover:scale-105">
                    <svg className="h-3 w-3 text-[#07C160] transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.007-.27-.026-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                    </svg>
                    <span className="text-xs text-muted-foreground group-hover:text-[#07C160] transition-colors duration-300">WeChat</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Scan any QR code with your phone to start a conversation instantly
        </p>
      </div>
    </section>
  );
}
