/* Cette fonction represente le footer de l'application */

function Footer() {
    return (
        <div>
            <footer className="mt-10 backdrop-blur-md bg-white/60 dark:bg-gray-900/50 
  border-t border-blue-100 dark:border-gray-700 
  text-center py-6 
  text-lg font-medium font-[Inter] 
  text-gray-700 dark:text-gray-300">

                <p className="opacity-90">
                    © {new Date().getFullYear()} App Tracker — Organisez vos tâches avec style.
                </p>
            </footer>


        </div>
    )
}

export default Footer