package main

import (
	"flag"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
	"github.com/wish/kron/server/handlers"
	"k8s.io/client-go/kubernetes"
	_ "k8s.io/client-go/plugin/pkg/client/auth/oidc"
	"k8s.io/client-go/tools/clientcmd"
)

// InitializeAPIRouter initializes a new router with all handlers registered
func InitializeAPIRouter(router *mux.Router) {
	api := router.PathPrefix("/api/v1/").Subrouter()

	var kubeconfig *string
	if home := os.Getenv("HOME"); home != "" {
		kubeconfig = flag.String("kubeconfig", filepath.Join(home, ".kube", "config"), "(optional) absolute path to the kubeconfig file")
	} else {
		kubeconfig = flag.String("kubeconfig", "", "absolute path to the kubeconfig file")
	}
	flag.Parse()

	// use the current client_gocontext in kubeconfig
	config, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)
	if err != nil {
		panic(err.Error())
	}

	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}

	// load all handlers
	api.HandleFunc("/cronjobs", handlers.CronjobsGet(clientset)).Methods("GET")
}
