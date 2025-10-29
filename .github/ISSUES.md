# Open Issues and Tasks

This file tracks open issues and tasks for the Agility Metronome project. For the full roadmap, see [ROADMAP.md](../ROADMAP.md).

## Infrastructure

### Desktop App Support - Investigate Electron or Similar Solutions

**Priority:** Medium  
**Tier:** 3 (Hard - 1-3 weeks)  
**Category:** Infrastructure  
**Free/Pro:** Free  

**Description:**
Investigate and implement desktop application support for Agility Metronome using Electron or similar solutions that allow native app builds for Windows, macOS, and Linux.

**Problem It Solves:**
- Users who prefer native desktop applications over web browsers
- Better offline support and system integration
- Potential performance improvements for audio processing
- Professional musicians may prefer installable desktop software

**Proposed Solution:**
Research and evaluate options for creating desktop builds:
1. **Electron** - Most popular, uses Chromium and Node.js
   - Pros: Large ecosystem, good documentation, cross-platform
   - Cons: Larger bundle size, resource intensive
   
2. **Tauri** - Modern alternative using Rust
   - Pros: Smaller bundle size, better performance, uses system WebView
   - Cons: Newer ecosystem, less documentation
   
3. **Neutralino** - Lightweight alternative
   - Pros: Very small bundle size
   - Cons: Limited ecosystem

**Implementation Steps:**
1. Research and compare Electron, Tauri, and other solutions
2. Create proof-of-concept with chosen solution
3. Test audio performance and Web Audio API compatibility
4. Ensure microphone access works properly in desktop environment
5. Set up build pipeline for Windows, macOS, and Linux
6. Create installation packages (.exe, .dmg, .deb/.rpm)
7. Test on all target platforms
8. Update documentation with installation instructions

**Technical Considerations:**
- Ensure Web Audio API works correctly in Electron/Tauri environment
- Verify microphone permissions and access work properly
- Test audio latency and performance
- Ensure all existing features work in desktop mode
- Consider code signing for installers
- Plan update mechanism for desktop builds

**Success Criteria:**
- Desktop app runs on Windows, macOS, and Linux
- All web features work identically in desktop version
- Audio performance is equal or better than web version
- Installer packages are available for all platforms
- Documentation updated with desktop installation instructions

**Related Features:**
- PWA support (Tier 3)
- Mobile installation support (Tier 3)

**Estimated Effort:** 1-3 weeks

**Status:** Open - Not Started

---

*Last Updated: October 2025*
