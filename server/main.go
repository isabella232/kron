package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	InitializeAPIRouter(router)
	router.PathPrefix("/public").Handler(http.FileServer(http.Dir(".")))
	router.PathPrefix("/").HandlerFunc(IndexHandler)
	log.Fatal(http.ListenAndServe(":8080", router))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "public/index.html")
}
