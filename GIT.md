do not use on a public branch
make sure no one is working off of the original commit of the feature branch...
### rebase

git checkout feature
git rebase -i main

pick 33d5b7a Message for commit #1
fixup 9480b3d Message for commit #2
pick 5c67e61 Message for commit #3