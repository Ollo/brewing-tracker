import React from 'react'

const BeerIcon = () => (
  <img src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNDAwLjAwNCwxNDkuMzMzaC0xNnYtMjYuNDE3YzE2LjQ1OC0xMy4yMjksMjUuMTY3LTM5LjM3NSwxOS42ODgtNjEuNjA0Yy00LjY2Ny0xOS4wNjMtMjAuMTg4LTM0LjIwOC0zOS40NzktMzguNTgzICAgICBjLTE0LjEyNS0zLjIwOC0yOC4wMjEtMC44MzMtMzkuNjI1LDYuMjcxYy04LjkxNy0xNy4zMTMtMjYuOTc5LTI5LTQ3LjI1LTI5Yy0xNy40MTcsMC0zMy4zMzQsOC41ODMtNDMuMTI1LDIyLjE4OCAgICAgQzIyMC40LDguMDYzLDIwMS42MDgsMCwxODEuMzM4LDBjLTI5LjI1LDAtNTUuMjcxLDE3LTY3LjM5Niw0My4xNjdjLTEzLjc3MS0xLjg3NS0zMC45MTcsMC43OTItNTAuODEzLDE5Ljc1ICAgICBjLTEzLjQ3OSwxMi44NTQtMjAuNzUsMjguNzkyLTIwLjQ1OCw0NC45MTdjMC40NzksMjYuNzUsMTcuOTU4LDUwLjM3NSw0Mi42NjcsNTkuMTY3djYuMjVjMCwyMC44OTYtMy43NzEsNDEuMjkyLTcuNzUsNjIuODc1ICAgICBsLTIuMjcxLDEyLjUyMWMtMC40MTcsMi4zOTYtMC42NDYsNC44MzMtMC42NDYsNy4zNTRjMCwxOS44NTQsMTMuNjI1LDM2LjU2MywzMiw0MS4zMTN2ODcuNzcxICAgICBjMCwyNS41NDItNi4wNDIsNTEuMTI1LTE3LjQ3OSw3NC4wMjFjLTIuNTIxLDUuMDQyLTMuODU0LDEwLjY4OC0zLjg1NCwxNi4zMzNjMCwyMC4xNjcsMTYuMzk2LDM2LjU2MywzNi41NjMsMzYuNTYzaDI0Ni44NzUgICAgIGMyMC4xNjcsMCwzNi41NjMtMTYuMzk2LDM2LjU2My0zNi41NjNjMC01LjY0Ni0xLjMzNC0xMS4yOTItMy44NTQtMTYuMzMzYy0xMS40MzgtMjIuODk2LTE3LjQ3OS00OC40NzktMTcuNDc5LTc0LjAyMVYzODRoMTYgICAgIGMzMS45NzksMCw2OS4zMzMtMjUuNjQ2LDY5LjMzMy05Ny45Mzh2LTM4Ljc5MkM0NjkuMzM4LDE3NC45NzksNDMxLjk4MywxNDkuMzMzLDQwMC4wMDQsMTQ5LjMzM3ogTTk2LjAwNCwyNTYgICAgIGMwLTEuMjcxLDAuMTA0LTIuNSwwLjMxMy0zLjY0Nkw5OC41NjcsMjQwYzMuOTc5LTIxLjU4Myw4LjEwNC00My44OTYsOC4xMDQtNjYuNzV2LTE0LjMzM2MwLTUuMDgzLTMuNTgzLTkuNDM4LTguNTQyLTEwLjQ1OCAgICAgYy0xOS40MTctMy45MzgtMzMuNzcxLTIxLjE4OC0zNC4xMjUtNDFjLTAuMjUtMTMuNjA0LDguNTYzLTI0LjA2MywxMy44MzMtMjkuMDgzYzExLjgzMy0xMS4yNzEsMjAuOTc5LTE0LjQxNywyOC44NTQtMTQuNDE3ICAgICBjMy45NTgsMCw3LjYwNCwwLjc5MiwxMS4xMDQsMS43NWM1LjU4MywxLjQ3OSwxMS4yMjktMS42NDYsMTIuOTc5LTcuMDYzYzcuMDgzLTIyLjMxMywyNy4zOTYtMzcuMzEzLDUwLjU2My0zNy4zMTMgICAgIGMxOC44OTYsMCwzNiw5Ljg3NSw0NS43NSwyNi40MTdjMi4xODgsMy43MDgsNi40NTgsNS43NSwxMC42MjUsNS4xNDZjNC4yNzEtMC41ODMsNy43NS0zLjY0Niw4Ljg3NS03LjgxMyAgICAgYzMuNzI5LTEzLjk3OSwxNi4zNzUtMjMuNzUsMzAuNzUtMjMuNzVjMTUuNzcxLDAsMjkuMzEzLDExLjg1NCwzMS41LDI3LjU4M2MwLjU4Myw0LjE2NywzLjU2Myw3LjYwNCw3LjYyNSw4Ljc3MSAgICAgYzQsMS4yMDgsOC4zOTYtMC4xNjcsMTEuMTA0LTMuMzk2YzcuOTU4LTkuNDc5LDE5LjgxMy0xMy41LDMxLjkxNy0xMC43NzFjMTEuMzMzLDIuNTgzLDIwLjc3MSwxMS43NzEsMjMuNSwyMi44NzUgICAgIGMzLjQ3OSwxNC4xNjctMi41NDIsMzIuNS0xMi44MTMsNDAuMjcxbC0xNDEuMzc1LDAuMDIxYy0zLjA0MiwwLTUuOTM4LDEuMjkyLTcuOTU4LDMuNTYzICAgICBjLTE1LjMxMywxNy4xODgtNDAuNjY3LDIyLjk3OS02Mi44MTMsMTIuMTI1Yy01LjA4My0yLjQ1OC0xMS4zMzMtMC41MjEtMTQuMDYzLDQuNWMtMi45NTgsNS40NTgtNi44OTYsMTAuMDYzLTExLjcwOCwxMy42ODggICAgIGMtMi42NjcsMi4wMjEtNC4yNSw1LjE2Ny00LjI1LDguNTIxdjI0LjE2N2MwLDIyLjg1NCw0LjEyNSw0NS4xNjcsOC4xMDQsNjYuNzVsMi4yNSwxMi4zMTNjMC4yMDgsMS4xODgsMC4zMTMsMi40MTcsMC4zMTMsMy42ODggICAgIGMwLDExLjc3MS05LjU2MywyMS4zMzMtMjEuMzMzLDIxLjMzM0MxMDUuNTY3LDI3Ny4zMzMsOTYuMDA0LDI2Ny43NzEsOTYuMDA0LDI1NnogTTM2OC43NzUsNDkwLjY2N0gxMjEuOSAgICAgYy04LjM5NiwwLTE1LjIyOS02LjgzMy0xNS4yMjktMTUuMjI5YzAtMi4zNTQsMC41NjMtNC42ODgsMS42MDQtNi43OTJjMTIuOTE3LTI1LjgzMywxOS43MjktNTQuNzI5LDE5LjcyOS04My41NjN2LTg3Ljc3MSAgICAgYzE4LjM3NS00Ljc1LDMyLTIxLjQ1OCwzMi00MS4zMTNjMC0yLjUyMS0wLjIyOS00Ljk1OC0wLjY0Ni03LjM5NmwtMi4yNzEtMTIuNDc5Yy0zLjk3OS0yMS41ODMtNy43NS00MS45NzktNy43NS02Mi44NzV2LTE5LjE0NiAgICAgYzIuOTc5LTIuNjg4LDUuNjg4LTUuNjQ2LDguMTI1LTguODc1YzI2LjY4OCw5LjMzMyw1Ni4zMzMsMi4wMjEsNzUuODk2LTE3LjIyOWgxMjkuMzEzdjI1Ny4wODMgICAgIGMwLDI4LjgzMyw2LjgxMyw1Ny43MjksMTkuNzI5LDgzLjU2M2MxLjA0MiwyLjEwNCwxLjYwNCw0LjQzOCwxLjYwNCw2Ljc5MkMzODQuMDA0LDQ4My44MzMsMzc3LjE3MSw0OTAuNjY3LDM2OC43NzUsNDkwLjY2N3ogICAgICBNNDQ4LjAwNCwyODYuMDYzYzAsNDcuMjUtMTguMzk2LDc2LjYwNC00OCw3Ni42MDRjLTUuMzg3LDAtMTAuNzM2LTIuNTIyLTE2LTYuNTI5VjE3Ny4xOTVjNS4yNjQtNC4wMDcsMTAuNjEzLTYuNTI5LDE2LTYuNTI5ICAgICBjMjkuNjA0LDAsNDgsMjkuMzU0LDQ4LDc2LjYwNFYyODYuMDYzeiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMjQ1LjMzOCwxNzAuNjY3Yy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djI1NmMwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtMjU2QzI1Ni4wMDQsMTc1LjQzOCwyNTEuMjMzLDE3MC42NjcsMjQ1LjMzOCwxNzAuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMzA5LjMzOCwxNzAuNjY3Yy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djI1NmMwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtMjU2QzMyMC4wMDQsMTc1LjQzOCwzMTUuMjMzLDE3MC42NjcsMzA5LjMzOCwxNzAuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJCQk8cGF0aCBkPSJNMTgxLjMzOCwxNzAuNjY3Yy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djI1NmMwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3ICAgICBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtMjU2QzE5Mi4wMDQsMTc1LjQzOCwxODcuMjMzLDE3MC42NjcsMTgxLjMzOCwxNzAuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' />
)

export default BeerIcon