"deploy": "npm run build && npm run dist && npm run push"

"deploy": "npm build && surge -p ./ build --domain caffeinati.surge.sh"
