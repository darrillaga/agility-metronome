# Roadmap - Agility Metronome

This document outlines planned features and improvements for the Agility Metronome project. Features are organized by implementation complexity and categorized for easy navigation.

## Feature Tiers

### Tier 1: Quick Wins (Easy - 1-3 days each)

These features are relatively straightforward to implement and provide immediate value.

| Feature | Description | Category | Free/Pro | Priority |
|---------|-------------|----------|----------|----------|
| **Increase treble clef size** | Increase treble clef size by 10% while keeping the anchor point on the second line | UI/UX | Free | High |
| **Set clef as part of instrument config** | Move clef selection from UI to instrument configuration | Architecture | Free | High |
| **Remove refactor notes from README** | Clean up README by removing temporary refactor notes and keeping it focused on current features | Documentation | Free | Medium |
| **Automate test reports** | Generate TEST_RESULTS.md automatically after each test run | Testing | Free | Medium |
| **Remove variable data from docs** | Ensure README and ARCHITECTURE.md don't reference dynamic data like test counts | Documentation | Free | Medium |

**Estimated Total: 1-2 weeks**

---

### Tier 2: Feature Enhancements (Medium - 3-7 days each)

These features require moderate effort and involve UI/UX improvements and new display options.

| Feature | Description | Category | Free/Pro | Priority |
|---------|-------------|----------|----------|----------|
| **Bass clef support for piano** | Add bass clef in parallel with treble clef when piano is selected | UI/UX | Free | High |
| **Piano registry support** | Full support for piano's extended range across both clefs | Audio | Pro | High |
| **Differentiate icons by staff** | Update icons so staff and note sound are visually distinct | UI/UX | Free | Medium |
| **Add scales support** | Implement scale selection (root, mode, type) to practice specific scales | Audio | Pro | High |
| **Flat notes support** | Allow notes to be displayed as either sharp or flat | UI/UX | Free | Medium |
| **Visual metronome representation** | Add visual metronome option instead of or in addition to sound | UI/UX | Free | Medium |
| **Support different timbres** | Allow users to select different instrument sounds/timbres | Audio | Pro | Low |
| **Timer option** | Add optional practice session timer | UI/UX | Free | Low |
| **Add language support (Spanish)** | Internationalize the app with Spanish translation | i18n | Free | Low |

**Estimated Total: 6-10 weeks**

---

### Tier 3: Advanced Capabilities (Hard - 1-3 weeks each)

These features involve complex functionality, new technologies, and significant architectural changes.

| Feature | Description | Category | Free/Pro | Priority |
|---------|-------------|----------|----------|----------|
| **Microphone support** | Add microphone input for pitch detection and practice feedback | Audio | Pro | High |
| **Pitch accuracy logging** | Log and analyze pitch accuracy when practicing with microphone | Analytics | Pro | High |
| **Time response logging** | Track and log timing accuracy when responding to note changes | Analytics | Pro | High |
| **Stop feature with microphone** | Automatically stop if microphone doesn't detect playing | Audio | Pro | Medium |
| **Live pitch misalignment display** | Show real-time pitch accuracy feedback in the UI | UI/UX | Pro | High |
| **Live time misalignment display** | Show real-time timing accuracy feedback in the UI | UI/UX | Pro | High |
| **Statistics display on stop** | Show detailed practice statistics when stopping a session | Analytics | Pro | High |
| **Prepare app for mobile installation** | Convert to Progressive Web App (PWA) with offline support | Infrastructure | Free | High |
| **Mobile installation support** | Enable installation on mobile devices as standalone app | Infrastructure | Free | High |
| **Desktop app support** | Investigate and implement desktop support using Electron or similar solutions for native app builds | Infrastructure | Free | Medium |

**Estimated Total: 12-20 weeks**

---

### Tier 4: Platform & Business Features (Very Hard - 3-8 weeks each)

These features involve backend infrastructure, authentication, monetization, and complex data analytics.

| Feature | Description | Category | Free/Pro | Priority |
|---------|-------------|----------|----------|----------|
| **Free/Pro feature structure** | Designate and implement two-tier feature system | Business | Both | High |
| **Email collection with validation** | Ask for email with code validation after 1 min of app usage | Business | Free | High |
| **Supabase backend integration** | Set up Supabase for user authentication and data storage | Infrastructure | Both | High |
| **Advanced statistics page** | Comprehensive statistics showing pitch accuracy by range, timing accuracy for standard vs altered notes | Analytics | Pro | High |
| **Range-based pitch analytics** | Break down pitch accuracy statistics by different note ranges | Analytics | Pro | Medium |
| **Note-type timing analytics** | Separate timing statistics for standard vs altered notes | Analytics | Pro | Medium |
| **Restrictive license** | Add license preventing commercial use by others (only author can sell) | Legal | Both | Medium |

**Estimated Total: 20-40 weeks**

---

## Implementation Priority Guidelines

### Phase 1: Foundation (Tier 1)
Start with quick wins to clean up the codebase, improve documentation, and make small UX improvements. These set a solid foundation.

**Recommended order:**
1. Set clef as part of instrument config
2. Increase treble clef size by 10%
3. Remove refactor notes from README
4. Automate test reports
5. Remove variable data from docs

### Phase 2: Core Features (Tier 2)
Add the key musical features that make the app more useful for practice.

**Recommended order:**
1. Bass clef support for piano
2. Add scales support (root, mode, type)
3. Flat notes support
4. Piano registry support
5. Visual metronome representation
6. Differentiate icons by staff
7. Support different timbres
8. Timer option
9. Add language support (Spanish)

### Phase 3: Pro Features (Tier 3)
Implement advanced capabilities that justify a Pro tier.

**Recommended order:**
1. Prepare app for mobile installation (PWA)
2. Microphone support (foundation)
3. Pitch accuracy logging
4. Time response logging
5. Live pitch misalignment display
6. Live time misalignment display
7. Stop feature with microphone
8. Statistics display on stop
9. Mobile installation support
10. Desktop app support (Electron or similar)

### Phase 4: Monetization (Tier 4)
Add business infrastructure to support a sustainable product.

**Recommended order:**
1. Free/Pro feature structure
2. Supabase backend integration
3. Email collection with validation
4. Advanced statistics page
5. Range-based pitch analytics
6. Note-type timing analytics
7. Restrictive license

---

## Complexity Breakdown

### Easy (1-3 days)
- Configuration changes
- Documentation updates
- Small UI adjustments
- Code refactoring

### Medium (3-7 days)
- New UI components
- Display mode additions
- Feature toggles
- Internationalization

### Hard (1-3 weeks)
- Audio processing (microphone)
- Real-time analytics
- PWA conversion
- Complex state management

### Very Hard (3-8 weeks)
- Backend integration
- Authentication system
- Data analytics platform
- Monetization infrastructure

---

## Contributing

If you'd like to contribute to any of these features:

1. Check if there's an existing GitHub issue for the feature
2. If not, create a new issue using the feature request template
3. Comment on the issue to discuss implementation approach
4. Fork the repository and create a feature branch
5. Submit a pull request referencing the issue

---

## Questions or Suggestions?

Have ideas for additional features or questions about the roadmap? Please open a GitHub issue with the "feature request" label.

---

**Last Updated:** October 2025
