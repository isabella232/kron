package handlers

import (
	"encoding/json"
	"net/http"

	"k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
)

// CronjobsGet returns a list of all cronjobs
func CronjobsGet(clientset *kubernetes.Clientset) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		cronjobs, err := clientset.BatchV1beta1().CronJobs("default").List(v1.ListOptions{})
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		response, err := json.Marshal(cronjobs)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(response)
	}
}
