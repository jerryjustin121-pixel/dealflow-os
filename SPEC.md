# DealFlow OS Specification
Version: 1.0
Status: Active
Owner: Founder
Technical Owner: Claude

---

# Project Vision

DealFlow OS is an AI Revenue Recovery Platform for Real Estate Brokerages.

Our customers do not buy AI.

They buy:

- More Closed Deals
- Better Lead Prioritization
- Revenue Recovery
- Agent Accountability

The platform's purpose is to identify opportunities hidden inside a brokerage's existing leads.

---

# Mission

Recover revenue lost through:

- forgotten leads
- poor follow-ups
- bad prioritization
- inconsistent agents

Every feature should help brokerage owners recover more revenue.

If a feature does not directly support this mission,

it does not belong in the MVP.

---

# Target Customer

Primary Customer

Small and Medium Real Estate Brokerages

Markets

• UAE

• India

• Kuwait

• UK

Decision Maker

Brokerage Owner

Managing Director

Sales Manager

---

# Product Positioning

NOT

CRM

Chatbot

Automation Platform

Marketing Software

YES

AI Revenue Recovery System

AI Lead Intelligence Platform

Brokerage Operating System

---

# Core Workflow

Broker Login

↓

Upload CSV

↓

Validate CSV

↓

Parse CSV

↓

Store Leads

↓

Claude Scores Leads

↓

Hot / Warm / Cold Classification

↓

Dashboard

↓

Open Lead

↓

Generate Follow-up

↓

Copy Follow-up

↓

Broker Closes More Deals

---

# MVP Scope

Included

Authentication

Organizations

CSV Upload

CSV Validation

CSV Parsing

Lead Import

Duplicate Detection

AI Lead Scoring

Dashboard

Lead Details

Follow-up Generator

Basic Analytics

Error Handling

Logging

Testing

Deployment

Not Included

CRM Integrations

WhatsApp

Email Sending

SMS

Notifications

Billing

Payments

Marketing Automation

Mobile App

Agent Chat

Workflow Builder

Calendar

Reports

Admin Panel

---

# Approved Technology Stack

Frontend

Next.js 14

App Router

TypeScript

Tailwind CSS

shadcn/ui

Backend

Next.js API Routes

Database

Neon PostgreSQL

ORM

Drizzle ORM

Authentication

Clerk

Organizations Enabled

AI

Anthropic Claude

Haiku

Lead Scoring

Sonnet

Follow-up Drafting

Hosting

Vercel

Version Control

GitHub

Package Manager

npm

This stack is FINAL.

Do not replace technologies without Founder approval.

---

# Architecture

Browser

↓

Next.js

↓

API Routes

↓

Database

↓

Claude

↓

Dashboard

Single Repository

Single Deployment

No Microservices

No FastAPI

No Docker

No Kubernetes

Keep architecture simple.

---

# Engineering Principles

Prioritize

Correctness

Maintainability

Security

Performance

Developer Experience

Production Readiness

Low Operational Cost

Never overengineer.

Build for the first 100 customers.

---

# Folder Structure

app/

components/

lib/

db/

services/

ai/

hooks/

types/

config/

constants/

middleware/

public/

styles/

tests/

scripts/

docs/

Keep responsibilities separated.

---

# Database

Multi Tenant

Organizations

Users

Leads

Lead Scores

Activity

Every query must respect Organization boundaries.

Never leak tenant data.

---

# Lead Lifecycle

Imported

↓

Parsed

↓

Validated

↓

Stored

↓

AI Scored

↓

Ranked

↓

Viewed

↓

Follow-up Generated

---

# AI Responsibilities

Haiku

Lead Score

Lead Category

Confidence

Reasoning

Recommended Action

Sonnet

Personalized Follow-up

Professional Tone

Broker Friendly

Never hallucinate missing information.

Return structured JSON.

---

# Dashboard

Primary Widgets

Today's Priorities

Hot Leads

Warm Leads

Cold Leads

Revenue At Risk

Dead Leads

Recent Uploads

Every widget should answer

"What should the owner do today?"

---

# Security

Authentication

Authorization

Organization Isolation

Input Validation

CSV Validation

SQL Injection Protection

XSS Protection

Environment Variables

Secrets Management

Rate Limiting

Never expose secrets.

Never expose tenant data.

---

# Performance

Batch Inserts

Streaming Imports

Parallel AI Requests

Retry Logic

Efficient Queries

Indexes

Minimal Re-renders

Server Components

---

# Code Standards

Strict TypeScript

No any

Reusable Components

Small Functions

Readable Code

No Placeholder Code

No Dead Code

No TODOs

Production Ready Only

---

# Testing

Every feature requires

Manual QA

Edge Case Review

Security Review

Performance Review

Unit Tests where valuable

Integration Tests where valuable

---

# Git Standards

Small Commits

Logical Commits

Meaningful Messages

Keep Repository Clean

---

# Project Workflow

Work in Vertical Slices

Every milestone includes

Goal

Implementation

Testing

Review

Documentation

Completion

Then automatically continue.

---

# Autonomous Rules

Claude owns technical execution.

Claude decides

Folder Structure

Code Organization

Validation

Testing

API Design

Performance

Security

Refactoring

Naming

Claude asks Founder only for

API Keys

Credentials

Paid Services

Breaking Schema Changes

Business Decisions

Production Deployment

Legal Issues

Everything else proceeds automatically.

---

# Definition of Done

The MVP is complete only when

✓ User signs in

✓ Organization created

✓ CSV uploaded

✓ Leads imported

✓ Leads scored

✓ Dashboard populated

✓ Lead details open

✓ Follow-up generated

✓ Copy works

✓ Security reviewed

✓ Tests pass

✓ Deployment succeeds

Only then is the MVP complete.

---

# Current Status

Repository: Not Started

Authentication: Pending

Database: Schema Approved

AI: Prompts Approved

Dashboard: Pending

Deployment: Pending

Current Sprint

Sprint 1

Repository Initialization

---

# IMPORTANT

This file is the single source of truth.

If conversation history conflicts with this file,

follow this file.

Only the Founder may modify this specification.

Always read this file before implementing new features.