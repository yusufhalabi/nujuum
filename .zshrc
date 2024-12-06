# Navigation
alias cdproj='cd /Users/yusufhalabi/projects/personal/nujuum'
alias ..='cd ..'
alias ...='cd ../..'

# Project commands
alias startdev='npm run dev'
alias buildproj='npm run build'
alias runtests='npm test'

# Git shortcuts
alias gst='git status'
alias gpl='git pull'
alias gps='git push'
alias gcm='git commit -m'
alias ga='git add'
alias gaa='git add .'
alias gc='git checkout'
alias gb='git branch'

# Utility
alias ll='ls -la'
alias cls='clear'

# Load this file
alias reload='source ~/.zshrc'

# Ensure the terminal shows git branch
autoload -Uz vcs_info
precmd() { vcs_info }
zstyle ':vcs_info:git:*' formats ' (%b)'
setopt PROMPT_SUBST
PROMPT='%n@%m %F{green}%~%F{yellow}${vcs_info_msg_0_}%f $ ' 