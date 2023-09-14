package main

import (
	"html/template"
	"net/http"
	"os"
	"path/filepath"
)

// Get path to template directory from env variable
var templatesDir = os.Getenv("TEMPLATES_DIR")

func Accueil(w http.ResponseWriter, r *http.Request) {
	// Build path to template
	tmplPath := filepath.Join(templatesDir, "index.html")
	// Load template from disk
	tmpl := template.Must(template.ParseFiles(tmplPath))
	// Inject data into template
	data := "La Chartreuse"
	tmpl.Execute(w, data)
}

func main() {
	// Create route to love-mountains web page
	http.HandleFunc("/Accueil", Accueil)
	// Launch web server on port 80
	http.ListenAndServe(":80", nil)
}
