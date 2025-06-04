import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { SiTiktok, SiInstagram } from "@icons-pack/react-simple-icons";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto URL with form data
    const subject = encodeURIComponent(
      `BINUS Chess Club - ${formData.subject}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:binuschessclub@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoUrl;

    // Show success toast
    toast({
      title: "Email Client Opened",
      description:
        "Your default email client should open with the pre-filled message. Please send the email to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions about BINUS Chess Club or want to join? Get in
              touch with us!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Chess Knight Decorative Element - Left */}
          <div className="absolute top-24 left-0 opacity-5 hidden lg:block">
            <div className="text-chessBlue" style={{ fontSize: "260px" }}>
              ♞
            </div>
          </div>

          {/* Chess Rook Decorative Element - Right */}
          <div className="absolute top-1/2 right-0 opacity-5 hidden lg:block">
            <div className="text-chessBlue" style={{ fontSize: "260px" }}>
              ♜
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="order-2 lg:order-1 relative px-0 md:px-4 lg:px-8">
                <h2 className="text-2xl font-bold text-chessBlue mb-6 flex items-center justify-center md:justify-start">
                  <span className="text-chessGreen mr-2">♟</span>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chessBlue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chessBlue"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chessBlue"
                    >
                      <option value="">Select a subject</option>
                      <option value="Membership">Membership Inquiry</option>
                      <option value="Events">Events Information</option>
                      <option value="Collaboration">
                        Collaboration Proposal
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chessBlue"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-chessBlue hover:bg-chessBlue-light w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="order-1 lg:order-2 relative px-0 md:px-4 lg:px-8">
                <h2 className="text-2xl font-bold text-chessBlue mb-6 flex items-center justify-center md:justify-start">
                  <span className="text-chessGreen mr-2">♚</span>
                  Contact Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <div className="flex items-start mb-4">
                    <Mail className="text-chessGreen mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-gray-600">binuschessclub@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <Phone className="text-chessGreen mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-gray-600">+62 852 1944 2808</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="font-medium text-lg mb-2">Location</h3>
                    <p className="text-gray-600">
                      Bina Nusantara University
                      <br />
                      Kemanggisan, Jakarta Barat
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-chessBlue mb-4 text-center md:text-left">
                  Follow Us
                </h2>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a
                    href="https://www.tiktok.com/@binuschessclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-full hover:bg-chessBlue hover:text-white transition-colors"
                  >
                    <SiTiktok size={24} />
                  </a>
                  <a
                    href="https://instagram.com/binuschessclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 p-3 rounded-full hover:bg-chessBlue hover:text-white transition-colors"
                  >
                    <SiInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-chessBlue mb-2">
                    How can I join BINUS Chess Club?
                  </h3>
                  <p className="text-gray-600">
                    All BINUS students are welcome to join! Simply fill out the
                    contact form above or attend one of our weekly meetings.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-chessBlue mb-2">
                    Do I need to be a good chess player to join?
                  </h3>
                  <p className="text-gray-600">
                    Not at all! We welcome players of all skill levels, from
                    beginners to advanced. Our club is a great place to learn
                    and improve.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-chessBlue mb-2">
                    Are there any membership fees?
                  </h3>
                  <p className="text-gray-600">
                    We have a small annual fee to cover club activities and
                    events. Please contact us for current membership rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
