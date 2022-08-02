---
title: Installing the TALL Stack
description: Getting started doesn't have to be a TALL order!
layout: ../../layouts/blog-layout.astro
categories: ["Laravel", "Livewire"]
publishedAt: August 15, 2020
draft: false
---

Lately, I've been having a lot of fun building applications with the TALL stack.
In case you haven't heard, the TALL stack is a full-stack solution built around
technologies that work with the Laravel framework (more information
[here](https://tallstack.dev) if you're interested). Much of the power of the TALL
stack comes from how it leans into the existing Laravel developer workflow without
having to branch too far out from the skills a Laravel developer would already
know to make smooth, reactive front-end experiences.

## Breaking down the TALL stack

Before we dive into how we can set up a TALL stack application, let's talk
about the different technologies that make up the TALL stack.

### Tailwind CSS

[Tailwind](https://tailwindcss.com/) was launched in alpha in 2017, but made
a significant name for itself in May 2019 when the first 1.x stable release
was launched to the public. Since then, it has continued to carve out a spot
for itself in the front-end development world.

Frequently, Tailwind is compared to front-end frameworks like Bootstrap, Bulma,
and others in that area, but in reality, Tailwind is more than a collection of
CSS rules bundled into a package. Tailwind's real power lies in its ability to
allow designers and developers to develop a master design schema that is used
across an application (or suite of applications).

### Alpine JS

[Alpine](https://github.com/alpinejs/alpine) is to JavaScript what Tailwind is
to CSS. Alpine is a library that lets you write lightweight, performant JavaScript
directly in your HTML to create simple, interactive components on the page. Alpine
was created by [Caleb Porzio](https://twitter.com/calebporzio) because of a need
to add interactivity on web pages that Livewire (his other major open-source package)
wasn't designed to handle. Since then, Alpine has made a splash separate from
Livewire wherever light, simple JavaScript was needed.

### Livewire

[Livewire](https://laravel-livewire.com/) is the glue that holds the TALL stack
together. Simply put, Livewire lets Laravel developers write PHP code like they
would normally write, but create server-driven reactive components that can give
Laravel apps built with Livewire a "SPA-feel".

### Laravel

[Laravel](https://laravel.com/) is the framework that serves as the base for the
TALL stack. It is a full-stack PHP framework that is powerful and easy to use,
and can handle anything from small personal blogs to large, enterprise systems.

## Installing the TALL stack

This super short installation guide assumes that you have the following set up
on your development environment:

- [Laravel Installer](https://laravel.com/docs/7.x/installation#installing-laravel)
- [Composer](https://getcomposer.org/)
- [NPM](https://www.npmjs.com/)

It also assumes that you're running in a macOS or Linux environment. Sorry
Windows users, I haven't developed on a Windows machine for a long time now,
so I'm really out of the loop.

### Step 1: Create a new Laravel install

First, in your terminal, move to the directory where you want to install the
Laravel project. Once there, run `laravel new {project name}` to use the
Laravel Installer to create a new Laravel install.

### Step 2: Add the TALL stack preset to `composer.json`

Once your Laravel install is all set up, move into your Laravel install
directory:

```bash
cd {project_name}
```

From there, use Composer to add two packages, Livewire and the TALL stack
front-end preset:

```bash
composer require livewire/livewire laravel-frontend-presets/tall
```

### Step 3: Authentication, or no authentication?

If you boot up your Laravel application right now, you might be surprised to see
that it doesn't look any different than a vanilla, out-of-the-box Laravel app.
That's because we've asked Composer to fetch the Livewire code and the TALL stack
front-end preset, but we haven't actually _done_ anything with the code yet.

Lucky for us, Laravel is prepared to do the heavy lifting when it comes to setting
up the TALL stack. We just need to make one more important decision before going
any further: do we want to use authentication in this project, or not?

If we don't want to use authentication in this project, run

```bash
php artisan ui tall
```

If we *DO* want the authentication scaffolding, run

```bash
php artisan ui tall --auth
php artisan migrate
```

### Step 4: Build the front-end

Once we have all of the front-end code in place, we just have to build it.
When you're ready, we only have one more command to run before we can see the
TALL stack in all its glory:

```bash
npm install && npm run dev
```

This command installs all of the front-end dependencies and compiles them into
code that our browser can understand.

And that's all there is to it! Now that it's easier than ever to get a TALL stack
application up and running, give it a try and see what you think! I'd love to hear
about your experiences with the TALL stack, so give me a shout on [Twitter](https://twitter.com/alexandersix_)
and let me know what you think!
