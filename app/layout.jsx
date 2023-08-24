import '@styles/globals.css';
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadate = {
    title: "Chatter Forge",
    description: "Empower Collaboration and Communication through AI-Powered Prompts with Chater Forge: Revolutionizing Real-Time Teamwork."
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>   
            </div>

            <main className="app">
                <Nav/>
                {children}
            </main>

        </body>        
    </html>
    
  )
}

export default RootLayout