default:
		@GOOS=linux CGO_ENABLED=0 go build -o ${GOPATH}/bin/kron github.com/wish/kron/server