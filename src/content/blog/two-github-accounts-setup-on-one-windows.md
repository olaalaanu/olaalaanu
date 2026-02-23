---
title: "How I Used Two GitHub Accounts on One Windows Computer (Beginner-Friendly Guide)"
date: "2026-02-23"
excerpt: "If you have both a work GitHub account and a personal GitHub account, using them on the same Windows computer can be confusing."
category: "Web Tools"
tags: ["Web", "Tools", "Github"]
author: "Lateef Ismaila"
---

If you have both a **work GitHub account** and a **personal GitHub account**, using them on the same Windows computer can be confusing. Git usually expects one account, and mixing them can cause problems like pushing code with the wrong account or failing to authenticate.

In this post, I’ll explain step by step how I set up two GitHub accounts on one Windows system using SSH, in a way that is safe for office computers and easy to manage. I will be using the powershell command line.

## Why This Is Needed

By default:

- Git uses one identity (name and email)
- SSH uses one key
- GitHub links that key to one account

This causes issues when:

- You work on office and personal projects on the same machine
- Your office network blocks normal SSH connections
- Git commits appear under the wrong GitHub account

The solution is to separate everything clearly.

## What We Will Do

We will:

1. Create two SSH keys (one per account)
2. Give each key a nickname (alias)
3. Tell Git which account to use per project
4. Make it work even on restricted office networks

## Step 1: Create Two SSH Keys

SSH keys are like secure passwords that GitHub uses to recognize you.

### For your work account

```powershell
ssh-keygen -t ed25519 -C "work_email@company.com"
```

When asked where to save the key, use:

```
C:\Users\User\.ssh\id_ed25519_office
```

### For your personal account

```powershell
ssh-keygen -t ed25519 -C "personal_email@gmail.com"
```

Save it as:

```
C:\Users\User\.ssh\id_ed25519_personal
```

Now you have **two separate keys**.

## Step 2: Start SSH Agent and Load the Keys (Windows)

The SSH agent remembers your keys so you don’t have to re-enter passwords.

```powershell
Set-Service ssh-agent -StartupType Automatic
Start-Service ssh-agent
```

Add both keys:

```powershell
ssh-add $HOME\.ssh\id_ed25519_office
ssh-add $HOME\.ssh\id_ed25519_personal
```

Check that they are loaded:

```powershell
ssh-add -l
```

## Step 3: Create SSH Aliases (Very Important)

Aliases tell SSH which key to use for which GitHub account.

Open this file (create it if it doesn’t exist):

```
C:\Users\User\.ssh\config
```

Add this:

```ini
Host github-office
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile C:\Users\User\.ssh\id_ed25519_office

Host github-personal
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile C:\Users\User\.ssh\id_ed25519_personal
```

### Why Port 443?

Many office networks block SSH on port 22. Port 443 is usually open, and GitHub officially supports it.

## Step 4: Add the Keys to GitHub

For each GitHub account:

1. Go to GitHub → Settings
2. Open SSH and GPG keys
3. Click New SSH key
4. Paste the content of the matching `.pub` file

Important rule:

> One SSH key can only belong to one GitHub account.

## Step 5: Fix Existing Repositories (No Re-Cloning Needed)

If you already cloned repositories before this setup, update their remote URLs.

### Work repository

```powershell
git remote set-url origin git@github-office:company/repo.git
```

### Personal repository

```powershell
git remote set-url origin git@github-personal:username/repo.git
```

Check:

```powershell
git remote -v
```

## Step 6: Set Git Name and Email Per Project

I keep my work identity globally, and override it only in personal projects.

### Inside a personal repo:

```powershell
git config --local user.name "Your Personal Name"
git config --local user.email "personal_email@gmail.com"
```

Git always prefers project settings over global ones.

## Step 7: Test Everything

Test SSH:

```
ssh -T git@github-office
ssh -T git@github-personal
```

Success looks like:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

Test Git:

```bash
git fetch
```

If it returns silently, it worked.

## Common Mistakes I Avoided

- Mixing `https://` with SSH aliases
- Reusing one SSH key for two accounts
- Forgetting to update old repositories
- Assuming no output means failure (`git fetch` is often silent)

### Final Thoughts

With this setup:

- Office and personal GitHub accounts stay separate
- No more credential conflicts
- Works on locked-down office networks
- Commits always go to the correct account

Once configured, you don’t have to think about it again.
