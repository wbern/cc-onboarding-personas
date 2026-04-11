export const translations = {
  en: {
    // Landing page
    "landing.title": "Welcome to Agentic Onboarding",
    "landing.subtitle":
      "Learn to build with Claude Code. Pick the persona that fits you best.",
    "landing.builder.name": "The Builder",
    "landing.builder.tagline": "Curious, hands-on, ready to tinker",
    "landing.builder.bullet1": "Picks up new tools and runs with them",
    "landing.builder.bullet2":
      "Finds broken things interesting, not frustrating",
    "landing.builder.bullet3": "Wants depth, control, and understanding",
    "landing.builder.bullet4": "Comfortable with the terminal",
    "landing.startJourney": "Start your journey",
    "landing.comingSoon": "Coming soon",

    // Wizard nav
    "nav.back": "Back",
    "nav.next": "Next",
    "nav.stepOf": "Step {current} of {total}",

    // Platform check
    "platform.title": "Are you using a Mac?",
    "platform.subtitle":
      "This guide currently supports macOS only. We'll add Windows and Linux soon.",
    "platform.yes": "Yes",
    "platform.no": "No",
    "platform.notMac": "Hang tight — Windows and Linux support is coming soon.",
    "platform.notMacSub": "Check back later or follow us for updates.",

    // Install
    "install.title": "Install Claude Code",
    "install.subtitle":
      "Copy this command. You'll paste it into your terminal in the next step.",
    "install.description":
      "This is the official installer from Anthropic. It downloads and sets up Claude Code on your machine.",
    "copy.button": "Copy",
    "copy.copied": "Copied!",
    "copy.fallback": "Select & copy manually (⌘C)",

    // Terminal / Spotlight
    "terminal.title": "Open Terminal",
    "terminal.subtitle":
      "You need a terminal to run the install command. Here's how to open one.",
    "terminal.pressKeys": "Press these keys on your keyboard",
    "terminal.orClick": "(or click them here)",
    "terminal.searchAppears": "A search bar will appear. Type:",
    "terminal.thenPress": "Then press",

    // Run
    "run.title": "Paste and Run",
    "run.subtitle":
      "In the Terminal window you just opened, paste the install command and run it.",
    "run.pasteInstruction": "to paste, then press",
    "run.shouldSee": "You should see something like this:",
    "run.installOutput":
      "Installing Claude Code...\nDownloading latest version...\nInstallation complete! Run 'claude' to get started.",
    "run.afterInstall":
      "The installation takes a few seconds. Once it finishes, you're ready to launch Claude Code for the first time.",

    // Theme
    "theme.title": "First Launch: Theme",
    "theme.subtitle":
      "in your terminal and press Enter. The first thing you'll see is a theme picker.",
    "theme.typeCommand": "Type",
    "theme.pressEnter": "Just press",
    "theme.forDarkMode": "for dark mode",
    "theme.orArrow": "Or arrow down to pick another theme — it's up to you.",
    "theme.chooseTheme": "? Choose your theme",

    // Login
    "login.title": "Log In to Your Account",
    "login.subtitle":
      "Claude Code needs to connect to your Anthropic account. It will open your browser automatically.",
    "login.step1": 'to select "Anthropic"',
    "login.step2":
      "Your browser will open — log in with your Anthropic account",
    "login.step3":
      "Come back to the terminal — it will confirm you're logged in",
    "login.subscription":
      "You'll need a Claude Pro, Max, Team, or Enterprise subscription. If you don't have one yet, you can sign up at",
    "login.pressEnter": "Press",
    "login.authQuestion": "? How would you like to authenticate?",

    // Exercise
    "exercise.title": "Your First Build",
    "exercise.subtitle": "You're set up. Time to build something real.",
    "exercise.step1": "Create a project folder and open Claude Code:",
    "exercise.step2Prefix": "At the",
    "exercise.step2Suffix": "prompt, type this:",
    "exercise.step3": "Watch Claude build it. You'll see something like:",
    "exercise.mockResponse": "I'll create a click counter app for you.",
    "exercise.mockCreated": "Created",
    "exercise.mockDescription":
      "A single-page app with a styled button that tracks and displays the click count.",
    "exercise.step4": "Open the file to see your work:",
    "exercise.summary":
      "That's the core workflow: describe what you want, Claude builds it. You just shipped your first thing with Claude Code.",
    "exercise.permissionTip":
      "If Claude asks for permission — type y and press Enter. It's confirming before creating files.",
    "exercise.errorTip":
      "Red or yellow text? Normal. Claude works through issues on its own. Wait for it to finish.",
    "exercise.fallback":
      "If nothing opens — find index.html in your my-project folder and double-click it.",
    "exercise.iterateToggle": "Want to keep going? Try iterating on it.",
    "exercise.iterateIntro": "Go back to the claude> prompt and try:",
    "exercise.iterateIdea1":
      "Add a reset button that sets the count back to zero",
    "exercise.iterateIdea2": "Make it dark mode with a gradient background",
    "exercise.iterateIdea3": "Add a history of the last 5 click timestamps",
    "exercise.iterateOutro":
      "Each prompt builds on what's already there. That's how real projects grow.",

    // Strategist exercise
    "strategist.exercise.title": "60-Second ROI Test",
    "strategist.exercise.subtitle":
      "One real task. Measurable result. You decide if it's worth it.",
    "strategist.exercise.heading": "The exercise",
    "strategist.exercise.instruction":
      "Open your terminal in any project folder and start Claude Code. Then paste this prompt:",
    "strategist.exercise.resultHeading": "What you'll get",
    "strategist.exercise.resultDescription":
      "Claude Code reads your project and responds with something like:",
    "strategist.exercise.sampleTitle": "Project Summary",
    "strategist.exercise.entryPoints": "Entry points",
    "strategist.exercise.analyzed": "Analyzed 147 files in 28 seconds.",
    "strategist.exercise.manualApproach": "Manual approach",
    "strategist.exercise.manualDetail": "Read files, trace imports, take notes",
    "strategist.exercise.claudeDetail": "Paste prompt, get structured answer",
    "strategist.exercise.costHeading": "What this costs",
    "strategist.exercise.freeTier": "Free tier",
    "strategist.exercise.freeDescription":
      "enough uses daily to evaluate properly",
    "strategist.exercise.proTier": "Pro ($20/mo)",
    "strategist.exercise.proDescription":
      "unlimited use, faster model, longer context window",
    "strategist.exercise.maxTier": "Max ($100/mo or $200/mo)",
    "strategist.exercise.maxDescription":
      "more usage, background agents, extended thinking",
    "strategist.exercise.upgradeNote":
      "You'll know when you need to upgrade — it's when you hit the limit mid-task, not before.",
    "strategist.exercise.nextSteps": "Next steps",
    "strategist.exercise.next1":
      "Try the prompt above on your actual project right now",
    "strategist.exercise.next2":
      "Ask Claude Code to do something you'd normally spend 10+ minutes on",
    "strategist.exercise.next3":
      "Bookmark this page or share it with your team",

    // Ready
    "ready.title": "Congratulations!",
    "ready.subtitle": "Claude Code is up and running. You're ready to build.",
    "ready.lookBack": "Look what you just did",
    "ready.lookBackBody":
      "You installed a tool, described what you wanted in plain English, and shipped a working app — all from the terminal. That's the entire Claude Code workflow. Everything from here is just bigger projects.",
    "ready.loggedIn": "✓ Logged in successfully",
    "ready.welcome": "Welcome to Claude Code!",
    "ready.typeMessage": "Type a message to start a conversation.",
    "ready.whatsNext": "What to build next",
    "ready.tip1": "Build a markdown note-taking app that saves to local files",
    "ready.tip2": "Explore slash commands — type",
    "ready.tip3": "file to give Claude context about your project",
    "ready.tip4": "Create a REST API with Express that serves a to-do list",
    "ready.createA": "Create a",

    // Navigator — Landing
    "landing.navigator.name": "The Navigator",
    "landing.navigator.tagline": "Focused on results, not the tech behind them",
    "landing.navigator.bullet1":
      "Uses technology to get things done, not as a hobby",
    "landing.navigator.bullet2":
      "Prefers tools that just work — like their Mac",
    "landing.navigator.bullet3": "Wants to direct the AI, not learn to code",
    "landing.navigator.bullet4": "Values clear guidance over technical depth",

    // Navigator — Welcome
    "navigator.welcome.title": "You did it!",
    "navigator.welcome.subtitle":
      "Claude Code is installed on your computer. That was the hardest part — everything from here is easy.",
    "navigator.welcome.planTitle": "Here's what we'll do together",
    "navigator.welcome.planBody":
      "You're going to ask Claude to build you a personal webpage. In about two minutes, you'll have a real webpage you can open in your browser — made by you, with zero coding.",
    "navigator.welcome.safetyNote":
      "Every step is copy-and-paste. You can close this window at any time — nothing will break.",

    // Navigator — Open
    "navigator.open.title": "Open Claude Code",
    "navigator.open.subtitle":
      "Open the black window you used to install Claude Code (it's called Terminal). Then paste this and press",
    "navigator.open.cantFind": "Can't find the black window?",
    "navigator.open.step1": "on your keyboard",
    "navigator.open.step2": "and press",
    "navigator.open.readyNote":
      "You should see Claude Code start up with a welcome message. Once it's ready, move to the next step.",

    // Navigator — Prompt
    "navigator.prompt.title": "Ask Claude to build your webpage",
    "navigator.prompt.subtitle":
      "Copy the message below and paste it into Claude Code. Then press",
    "navigator.prompt.copyNote":
      "That's it — just paste and press Enter. Claude will read your request and start building the webpage for you. You don't need to type anything else.",

    // Navigator — Watch
    "navigator.watch.title": "Claude is building your webpage",
    "navigator.watch.subtitle":
      "You'll see text flowing across the screen. This is completely normal — it's Claude writing your webpage in real time.",
    "navigator.watch.permissionTip":
      "If you see a question asking for permission — that's Claude being polite. It's asking if it's okay to create the file.",
    "navigator.watch.errorTip":
      "If you see red or yellow text — this happens sometimes and it's not a problem. Claude often figures things out on its own. Wait for it to finish.",
    "navigator.watch.doneNote":
      "When Claude says it's done creating the file, move to the next step. This usually takes less than 30 seconds.",

    // Navigator — Result
    "navigator.result.title": "Open your new webpage",
    "navigator.result.subtitle":
      "Claude created a file called index.html. Let's open it in your browser so you can see what you made.",
    "navigator.result.instruction": "Paste this into Claude Code and press",
    "navigator.result.browserNote":
      "Your browser will open automatically with the webpage Claude built for you. Take a look — that's yours!",
    "navigator.result.fallback":
      "If nothing opens — find the file called index.html in your Finder and double-click it. It will open in your browser.",

    // Navigator — Celebrate
    "navigator.celebrate.title": "You just built a webpage!",
    "navigator.celebrate.subtitle":
      "No coding. No complicated setup. Just you and Claude, working together.",
    "navigator.celebrate.moreTitle": "Want to try more?",
    "navigator.celebrate.moreBody":
      "You can ask Claude to do all kinds of things. Here are some ideas to paste into Claude Code:",
    "navigator.celebrate.idea1":
      "Write a thank-you email to my team for a great product launch",
    "navigator.celebrate.idea2":
      "Create a simple budget tracker spreadsheet as a CSV file",
    "navigator.celebrate.idea3":
      "Help me organize my Desktop folder by sorting files into subfolders",
    "navigator.celebrate.safetyReminder":
      "Remember: you can always close the black window to stop Claude. Nothing will break. When you're ready to use it again, just open Terminal and type claude.",
  },
  sv: {
    // Landing page
    "landing.title": "Välkommen till Agentic Onboarding",
    "landing.subtitle":
      "Lär dig bygga med Claude Code. Välj den persona som passar dig bäst.",
    "landing.builder.name": "Byggaren",
    "landing.builder.tagline": "Nyfiken, praktisk, redo att experimentera",
    "landing.builder.bullet1": "Tar upp nya verktyg och kör direkt",
    "landing.builder.bullet2":
      "Tycker trasiga saker är intressanta, inte frustrerande",
    "landing.builder.bullet3": "Vill ha djup, kontroll och förståelse",
    "landing.builder.bullet4": "Bekväm med terminalen",
    "landing.startJourney": "Börja din resa",
    "landing.comingSoon": "Kommer snart",

    // Wizard nav
    "nav.back": "Tillbaka",
    "nav.next": "Nästa",
    "nav.stepOf": "Steg {current} av {total}",

    // Platform check
    "platform.title": "Använder du en Mac?",
    "platform.subtitle":
      "Den här guiden stöder för närvarande bara macOS. Vi lägger till Windows och Linux snart.",
    "platform.yes": "Ja",
    "platform.no": "Nej",
    "platform.notMac": "Håll ut — stöd för Windows och Linux kommer snart.",
    "platform.notMacSub":
      "Kom tillbaka senare eller följ oss för uppdateringar.",

    // Install
    "install.title": "Installera Claude Code",
    "install.subtitle":
      "Kopiera det här kommandot. Du klistrar in det i terminalen i nästa steg.",
    "install.description":
      "Det här är den officiella installeraren från Anthropic. Den laddar ner och konfigurerar Claude Code på din dator.",
    "copy.button": "Kopiera",
    "copy.copied": "Kopierat!",
    "copy.fallback": "Markera och kopiera manuellt (⌘C)",

    // Terminal / Spotlight
    "terminal.title": "Öppna Terminal",
    "terminal.subtitle":
      "Du behöver en terminal för att köra installationskommandot. Så här öppnar du en.",
    "terminal.pressKeys": "Tryck på dessa tangenter på ditt tangentbord",
    "terminal.orClick": "(eller klicka på dem här)",
    "terminal.searchAppears": "En sökruta visas. Skriv:",
    "terminal.thenPress": "Tryck sedan på",

    // Run
    "run.title": "Klistra in och kör",
    "run.subtitle":
      "I Terminal-fönstret du just öppnade, klistra in installationskommandot och kör det.",
    "run.pasteInstruction": "för att klistra in, tryck sedan på",
    "run.shouldSee": "Du bör se något liknande:",
    "run.installOutput":
      "Installerar Claude Code...\nLaddar ner senaste versionen...\nInstallation klar! Kör 'claude' för att komma igång.",
    "run.afterInstall":
      "Installationen tar några sekunder. När den är klar kan du starta Claude Code för första gången.",

    // Theme
    "theme.title": "Första starten: Tema",
    "theme.subtitle":
      "i terminalen och tryck Enter. Det första du ser är en temaväljare.",
    "theme.typeCommand": "Skriv",
    "theme.pressEnter": "Tryck bara på",
    "theme.forDarkMode": "för mörkt läge",
    "theme.orArrow":
      "Eller pila ner för att välja ett annat tema — det är upp till dig.",
    "theme.chooseTheme": "? Välj ditt tema",

    // Login
    "login.title": "Logga in på ditt konto",
    "login.subtitle":
      "Claude Code behöver ansluta till ditt Anthropic-konto. Din webbläsare öppnas automatiskt.",
    "login.step1": 'för att välja "Anthropic"',
    "login.step2": "Din webbläsare öppnas — logga in med ditt Anthropic-konto",
    "login.step3":
      "Gå tillbaka till terminalen — den bekräftar att du är inloggad",
    "login.subscription":
      "Du behöver en Claude Pro-, Max-, Team- eller Enterprise-prenumeration. Om du inte har en ännu kan du registrera dig på",
    "login.pressEnter": "Tryck på",
    "login.authQuestion": "? Hur vill du autentisera?",

    // Exercise
    "exercise.title": "Ditt första bygge",
    "exercise.subtitle": "Allt är klart. Dags att bygga något på riktigt.",
    "exercise.step1": "Skapa en projektmapp och starta Claude Code:",
    "exercise.step2Prefix": "Vid",
    "exercise.step2Suffix": "prompten, skriv detta:",
    "exercise.step3": "Se Claude bygga det. Du kommer se något i stil med:",
    "exercise.mockResponse": "Jag skapar en klickräknar-app åt dig.",
    "exercise.mockCreated": "Skapad",
    "exercise.mockDescription":
      "En ensidesapp med en stilren knapp som räknar och visar antal klick.",
    "exercise.step4": "Öppna filen för att se ditt resultat:",
    "exercise.summary":
      "Det är hela arbetsflödet: beskriv vad du vill ha, Claude bygger det. Du har precis levererat din första grej med Claude Code.",
    "exercise.permissionTip":
      "Om Claude ber om tillstånd — skriv y och tryck Enter. Den bekräftar innan den skapar filer.",
    "exercise.errorTip":
      "Röd eller gul text? Normalt. Claude löser problem på egen hand. Vänta tills den är klar.",
    "exercise.fallback":
      "Om inget öppnas — hitta index.html i din my-project-mapp och dubbelklicka på den.",
    "exercise.iterateToggle": "Vill du fortsätta? Prova att iterera på det.",
    "exercise.iterateIntro": "Gå tillbaka till claude>-prompten och prova:",
    "exercise.iterateIdea1":
      "Lägg till en återställningsknapp som nollställer räknaren",
    "exercise.iterateIdea2": "Gör den i mörkt läge med en gradientbakgrund",
    "exercise.iterateIdea3":
      "Lägg till en historik över de senaste 5 klicktidsstämplarna",
    "exercise.iterateOutro":
      "Varje prompt bygger vidare på det som redan finns. Så växer riktiga projekt.",

    // Strategist exercise
    "strategist.exercise.title": "60-sekunders ROI-test",
    "strategist.exercise.subtitle":
      "En riktig uppgift. Mätbart resultat. Du bestämmer om det är värt det.",
    "strategist.exercise.heading": "Övningen",
    "strategist.exercise.instruction":
      "Öppna din terminal i valfri projektmapp och starta Claude Code. Klistra sedan in den här prompten:",
    "strategist.exercise.resultHeading": "Vad du får",
    "strategist.exercise.resultDescription":
      "Claude Code läser ditt projekt och svarar med något i stil med:",
    "strategist.exercise.sampleTitle": "Projektsammanfattning",
    "strategist.exercise.entryPoints": "Ingångspunkter",
    "strategist.exercise.analyzed": "Analyserade 147 filer på 28 sekunder.",
    "strategist.exercise.manualApproach": "Manuell metod",
    "strategist.exercise.manualDetail": "Läs filer, spåra importer, anteckna",
    "strategist.exercise.claudeDetail":
      "Klistra in prompt, få strukturerat svar",
    "strategist.exercise.costHeading": "Vad det kostar",
    "strategist.exercise.freeTier": "Gratis",
    "strategist.exercise.freeDescription":
      "tillräckligt med daglig användning för att utvärdera ordentligt",
    "strategist.exercise.proTier": "Pro (200 kr/mån)",
    "strategist.exercise.proDescription":
      "obegränsad användning, snabbare modell, längre kontextfönster",
    "strategist.exercise.maxTier": "Max (1 000 kr/mån eller 2 000 kr/mån)",
    "strategist.exercise.maxDescription":
      "mer användning, bakgrundsagenter, utökat tänkande",
    "strategist.exercise.upgradeNote":
      "Du vet när du behöver uppgradera — det är när du når gränsen mitt i en uppgift, inte innan.",
    "strategist.exercise.nextSteps": "Nästa steg",
    "strategist.exercise.next1":
      "Testa prompten ovan på ditt riktiga projekt nu",
    "strategist.exercise.next2":
      "Be Claude Code göra något du normalt lägger 10+ minuter på",
    "strategist.exercise.next3":
      "Bokmärk den här sidan eller dela den med ditt team",

    // Ready
    "ready.title": "Grattis!",
    "ready.subtitle": "Claude Code är igång. Du är redo att bygga.",
    "ready.lookBack": "Se vad du just gjorde",
    "ready.lookBackBody":
      "Du installerade ett verktyg, beskrev vad du ville ha på vanlig svenska, och levererade en fungerande app — allt från terminalen. Det är hela Claude Code-arbetsflödet. Härifrån är det bara större projekt.",
    "ready.loggedIn": "✓ Inloggad",
    "ready.welcome": "Välkommen till Claude Code!",
    "ready.typeMessage": "Skriv ett meddelande för att starta en konversation.",
    "ready.whatsNext": "Vad ska du bygga härnäst",
    "ready.tip1":
      "Bygg en anteckningsapp i markdown som sparar till lokala filer",
    "ready.tip2": "Utforska snedstreckskommandon — skriv",
    "ready.tip3": "-fil för att ge Claude kontext om ditt projekt",
    "ready.tip4":
      "Skapa ett REST API med Express som serverar en att göra-lista",
    "ready.createA": "Skapa en",

    // Navigator — Landing
    "landing.navigator.name": "Navigatören",
    "landing.navigator.tagline": "Fokuserad på resultat, inte tekniken bakom",
    "landing.navigator.bullet1":
      "Använder teknik för att få saker gjorda, inte som hobby",
    "landing.navigator.bullet2":
      "Föredrar verktyg som bara fungerar — som sin Mac",
    "landing.navigator.bullet3": "Vill styra AI:n, inte lära sig koda",
    "landing.navigator.bullet4":
      "Värdesätter tydlig vägledning framför tekniskt djup",

    // Navigator — Welcome
    "navigator.welcome.title": "Du klarade det!",
    "navigator.welcome.subtitle":
      "Claude Code är installerat på din dator. Det var den svåraste delen — allt härifrån är enkelt.",
    "navigator.welcome.planTitle": "Här är vad vi ska göra tillsammans",
    "navigator.welcome.planBody":
      "Du kommer att be Claude bygga en personlig webbsida åt dig. Om ungefär två minuter har du en riktig webbsida du kan öppna i din webbläsare — gjord av dig, utan kodning.",
    "navigator.welcome.safetyNote":
      "Varje steg är kopiera-och-klistra. Du kan stänga det här fönstret när som helst — inget går sönder.",

    // Navigator — Open
    "navigator.open.title": "Öppna Claude Code",
    "navigator.open.subtitle":
      "Öppna det svarta fönstret du använde för att installera Claude Code (det heter Terminal). Klistra sedan in detta och tryck",
    "navigator.open.cantFind": "Hittar du inte det svarta fönstret?",
    "navigator.open.step1": "på tangentbordet",
    "navigator.open.step2": "och tryck",
    "navigator.open.readyNote":
      "Du bör se Claude Code starta med ett välkomstmeddelande. När det är klart, gå till nästa steg.",

    // Navigator — Prompt
    "navigator.prompt.title": "Be Claude bygga din webbsida",
    "navigator.prompt.subtitle":
      "Kopiera meddelandet nedan och klistra in det i Claude Code. Tryck sedan på",
    "navigator.prompt.copyNote":
      "Det är allt — klistra in och tryck Enter. Claude läser din förfrågan och börjar bygga webbsidan åt dig. Du behöver inte skriva något annat.",

    // Navigator — Watch
    "navigator.watch.title": "Claude bygger din webbsida",
    "navigator.watch.subtitle":
      "Du kommer att se text flöda över skärmen. Det här är helt normalt — det är Claude som skriver din webbsida i realtid.",
    "navigator.watch.permissionTip":
      "Om du ser en fråga om tillåtelse — det är Claude som är artig. Den frågar om det är okej att skapa filen.",
    "navigator.watch.errorTip":
      "Om du ser röd eller gul text — det händer ibland och det är inget problem. Claude löser ofta saker på egen hand. Vänta tills den är klar.",
    "navigator.watch.doneNote":
      "När Claude säger att filen är skapad, gå till nästa steg. Det tar vanligtvis mindre än 30 sekunder.",

    // Navigator — Result
    "navigator.result.title": "Öppna din nya webbsida",
    "navigator.result.subtitle":
      "Claude skapade en fil som heter index.html. Låt oss öppna den i din webbläsare så att du kan se vad du har skapat.",
    "navigator.result.instruction": "Klistra in detta i Claude Code och tryck",
    "navigator.result.browserNote":
      "Din webbläsare öppnas automatiskt med webbsidan som Claude byggde åt dig. Ta en titt — den är din!",
    "navigator.result.fallback":
      "Om inget öppnas — hitta filen som heter index.html i Finder och dubbelklicka på den. Den öppnas i din webbläsare.",

    // Navigator — Celebrate
    "navigator.celebrate.title": "Du har precis byggt en webbsida!",
    "navigator.celebrate.subtitle":
      "Ingen kodning. Ingen komplicerad installation. Bara du och Claude, som arbetar tillsammans.",
    "navigator.celebrate.moreTitle": "Vill du prova mer?",
    "navigator.celebrate.moreBody":
      "Du kan be Claude göra alla möjliga saker. Här är några idéer att klistra in i Claude Code:",
    "navigator.celebrate.idea1":
      "Skriv ett tackmail till mitt team för en fantastisk produktlansering",
    "navigator.celebrate.idea2": "Skapa en enkel budgetspårare som en CSV-fil",
    "navigator.celebrate.idea3":
      "Hjälp mig organisera mitt skrivbord genom att sortera filer i undermappar",
    "navigator.celebrate.safetyReminder":
      "Kom ihåg: du kan alltid stänga det svarta fönstret för att stoppa Claude. Inget går sönder. När du är redo att använda det igen, öppna bara Terminal och skriv claude.",
  },
} as const;

export type Locale = keyof typeof translations;
type TranslationKey = keyof typeof translations.en;

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
