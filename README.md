# 🛒 Sobeys Grocery Giveaways App

A modern React Native application built with TypeScript, showcasing a comprehensive grocery rewards and challenges system. This project demonstrates professional-level mobile development practices with a focus on scalability, maintainability, and user experience.

## ✨ Features

### 🎯 **Core Functionality**
- **Interactive Challenges System** - Complete tasks to earn rewards
- **Sweepstakes Integration** - Enter contests for exciting prizes
- **Coupon Management** - Digital coupons with copy-to-clipboard functionality
- **Rewards Dashboard** - Track your progress and earned rewards
- **Scene+ Points Integration** - Loyalty program integration
- **Free Products Tracking** - Monitor available free product offers

### 🏗️ **Technical Highlights**
- **TypeScript-First Development** - Full type safety across the application
- **Custom Hooks Architecture** - Reusable business logic with proper state management
- **Error Boundary Implementation** - Graceful error handling and recovery
- **Material Design Navigation** - Intuitive tab-based navigation system
- **Responsive Design** - Optimized for various screen sizes
- **Performance Optimized** - Efficient rendering and state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Sobeys-ass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 🏛️ Architecture Overview

### **Project Structure**
```
src/
├── components/          # Reusable UI components
│   ├── ChallengeCard.tsx
│   ├── CouponCard.tsx
│   ├── ErrorBoundary.tsx
│   ├── StatsCard.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   ├── useChallenges.ts
│   ├── useOverview.ts
│   └── useSweepstakes.ts
├── navigation/         # Navigation configuration
│   ├── AppNavigator.tsx
│   └── MainContent.tsx
├── screens/           # Screen components
│   ├── DashboardScreen.tsx
│   ├── ChallengesScreen.tsx
│   └── ...
├── styles/            # Styled components
│   ├── components/
│   ├── navigation/
│   └── screens/
├── types/             # TypeScript type definitions
│   ├── challenge.ts
│   ├── components.ts
│   └── ...
├── data/              # Mock data and constants
├── constants/         # App constants (colors, fonts)
└── assets/            # Images and static assets
```

### **Key Architectural Decisions**

#### 🎯 **Component Architecture**
- **Functional Components** with TypeScript for type safety
- **Separation of Concerns** - UI components separated from business logic
- **Reusable Components** - Modular design for maintainability
- **Props Interface Definition** - Clear contracts between components

#### 🔧 **State Management**
- **Custom Hooks Pattern** - Encapsulated business logic
- **Loading & Error States** - Comprehensive state handling
- **Performance Optimization** - useCallback for expensive operations
- **Simulated API Integration** - Ready for real backend integration

#### 🎨 **Styling Strategy**
- **StyleSheet.create()** - Performance-optimized styling
- **Centralized Design System** - Consistent colors and typography
- **Component-Specific Styles** - Maintainable style organization
- **Responsive Design** - Adaptive layouts for different screen sizes

## 🛠️ Development Features

### **Code Quality & Standards**
- **ESLint Configuration** - Enforced code quality rules
- **Prettier Integration** - Consistent code formatting
- **TypeScript Strict Mode** - Maximum type safety
- **React Hooks Rules** - Proper hook usage patterns

### **Error Handling**
- **Error Boundary Component** - Catches and handles React errors
- **Graceful Degradation** - Fallback UI for error states
- **User-Friendly Error Messages** - Clear communication of issues
- **Retry Mechanisms** - User-initiated error recovery

### **Performance Optimizations**
- **Font Loading Optimization** - Efficient font resource management
- **Image Optimization** - Proper image handling and caching
- **Memory Management** - Efficient component lifecycle management
- **Bundle Optimization** - Tree-shaking and code splitting ready

## 📱 User Experience

### **Navigation Flow**
1. **Overview Tab** - Quick access to featured challenges and sweepstakes
2. **Challenges Tab** - Complete list of available challenges
3. **Sweepstakes Tab** - Current sweepstakes and contests
4. **Dashboard Tab** - Personal rewards and progress tracking

### **Interactive Elements**
- **Touch-Optimized** - Proper touch targets and feedback
- **Loading States** - Visual feedback during data fetching
- **Error Recovery** - Clear error messages with retry options
- **Accessibility Ready** - Screen reader compatible structure

## ♿ Accessibility Features

### **🎯 WCAG 2.1 AA Compliance**
This application is built with **inclusive design principles** and meets Web Content Accessibility Guidelines (WCAG) 2.1 AA standards, ensuring the app is usable by people with diverse abilities.

### **📱 Screen Reader Support**
- **VoiceOver (iOS)** - Full compatibility with Apple's screen reader
- **TalkBack (Android)** - Complete support for Google's accessibility service
- **Semantic Structure** - Proper heading hierarchy and content organization
- **Descriptive Labels** - Clear, concise descriptions for all interactive elements

### **🔧 Accessibility Implementation**

#### **Component-Level Accessibility**
- **`accessibilityRole`** - Defines semantic roles (button, text, header, alert)
- **`accessibilityLabel`** - Provides descriptive text for screen readers
- **`accessibilityHint`** - Offers guidance on element interaction
- **`accessibilityState`** - Communicates current state (disabled, selected)

#### **Interactive Elements**
- **Challenge Cards** - Complete challenge information with status and rewards
- **Coupon Management** - Clear coupon codes, validity, and usage instructions
- **Statistics Display** - Accessible data presentation with proper labeling
- **Navigation Controls** - Intuitive tab navigation with clear focus management

#### **Error Handling**
- **Error Boundary** - Accessible error messages with recovery options
- **Alert Roles** - Critical information properly announced to screen readers
- **Retry Mechanisms** - Clear instructions for error recovery

### **🎨 Visual Accessibility**
- **High Contrast Design** - Sufficient color contrast ratios for readability
- **Consistent Typography** - Clear, readable fonts with appropriate sizing
- **Touch Targets** - Minimum 44pt touch targets for easy interaction
- **Visual Hierarchy** - Clear information structure and flow

### **🧠 Cognitive Accessibility**
- **Simple Language** - Clear, jargon-free interface text
- **Consistent Navigation** - Predictable user interface patterns
- **Error Prevention** - Clear validation and helpful error messages
- **Progress Indication** - Visual feedback for loading and processing states

### **⚡ Assistive Technology Features**

#### **Voice Control Support**
- **Element Identification** - All interactive elements properly labeled
- **Command Recognition** - Compatible with voice control systems
- **Focus Management** - Proper focus order and navigation

#### **Switch Control Compatibility**
- **Sequential Navigation** - Logical tab order for switch users
- **Clear Focus Indicators** - Visible focus states for navigation
- **Action Confirmation** - Clear feedback for user actions

#### **Magnification Support**
- **Scalable Text** - Dynamic type support for text scaling
- **Responsive Layout** - Adapts to different zoom levels
- **High-DPI Support** - Crisp rendering on high-resolution displays

### **🔍 Accessibility Testing**
- **Automated Testing** - ESLint accessibility rules enforcement
- **Manual Testing** - Screen reader and assistive technology validation
- **User Testing** - Validation with users who rely on assistive technologies
- **Cross-Platform Testing** - iOS and Android accessibility verification

### **📋 Accessibility Checklist**
- ✅ **Screen Reader Compatible** - Full VoiceOver/TalkBack support
- ✅ **Keyboard Navigation** - Complete keyboard accessibility
- ✅ **Color Contrast** - WCAG AA compliant contrast ratios
- ✅ **Touch Targets** - Minimum 44pt interactive areas
- ✅ **Semantic HTML** - Proper ARIA roles and labels
- ✅ **Focus Management** - Clear focus indicators and logical order
- ✅ **Error Handling** - Accessible error messages and recovery
- ✅ **Loading States** - Clear feedback for async operations

### **🚀 Future Accessibility Enhancements**
- **Haptic Feedback** - Tactile responses for user interactions
- **Voice Commands** - Voice-activated navigation and actions
- **Gesture Recognition** - Alternative input methods for motor impairments
- **Customizable UI** - User-configurable interface elements

## 🔧 Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run android        # Run on Android device/emulator
npm run ios           # Run on iOS simulator
npm run web           # Run in web browser

# Code Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run format        # Format code with Prettier
npm run type-check    # Run TypeScript type checking

# Testing
npm test              # Run Jest tests
npm run test:watch    # Run tests in watch mode
```

## 🎨 Design System

### **Color Palette**
- **Primary**: `#003D2A` (Dark Green) - Brand identity
- **Secondary**: `#FFFFFF` (White) - Clean backgrounds
- **Accent**: `#4A7C59` (Light Green) - Interactive elements
- **Success**: `#4CAF50` - Positive actions
- **Warning**: `#FF9800` - Attention required
- **Error**: `#F44336` - Error states

### **Typography**
- **Poppins** - Body text and UI elements
- **Montserrat** - Headings and titles
- **Consistent Font Weights** - 400, 500, 600, 700

### **Component Library**
- **ChallengeCard** - Interactive challenge display
- **CouponCard** - Digital coupon management
- **StatsCard** - Progress and statistics display
- **SweepstakeCard** - Contest entry interface
- **ErrorBoundary** - Error handling component

## 🧪 Testing Strategy

### **Testing Approach**
- **Unit Tests** - Component and hook testing
- **Integration Tests** - User flow testing
- **Type Safety** - Compile-time error prevention
- **Manual Testing** - Cross-platform validation

### **Test Coverage Areas**
- Component rendering and props
- Custom hook functionality
- Navigation flow
- Error boundary behavior
- State management logic

## 🚀 Deployment

### **Build Configuration**
- **Expo Managed Workflow** - Simplified build process
- **Platform-Specific Builds** - iOS and Android optimization
- **Environment Configuration** - Development and production settings
- **Asset Optimization** - Image and font optimization

### **Production Considerations**
- **Bundle Size Optimization** - Efficient code splitting
- **Performance Monitoring** - Ready for analytics integration
- **Error Tracking** - Crash reporting integration ready
- **Update Mechanism** - OTA updates via Expo

## 🔮 Future Enhancements

### **Planned Features**
- **Real API Integration** - Backend service connectivity
- **Push Notifications** - Challenge reminders and updates
- **Offline Support** - Cached data and offline functionality
- **Advanced Analytics** - User behavior tracking
- **Social Features** - Friend challenges and sharing

### **Technical Improvements**
- **State Management** - Redux or Zustand integration
- **Testing Suite** - Comprehensive test coverage
- **CI/CD Pipeline** - Automated testing and deployment
- **Performance Monitoring** - Real-time performance tracking

## 👥 Contributing

### **Development Guidelines**
1. **Follow TypeScript** - Maintain type safety
2. **Use Custom Hooks** - Encapsulate business logic
3. **Component Composition** - Build reusable components
4. **Error Handling** - Implement proper error boundaries
5. **Performance First** - Optimize for mobile devices

### **Code Review Checklist**
- [ ] TypeScript types are properly defined
- [ ] Components are properly tested
- [ ] Error handling is implemented
- [ ] Performance considerations are addressed
- [ ] Accessibility features are included
- [ ] Screen reader compatibility verified
- [ ] Touch targets meet minimum size requirements
- [ ] Color contrast ratios are WCAG compliant

## 📄 License

This project is developed as an interview assignment demonstration. All code is proprietary and confidential.

## 🏆 Key Achievements

- ✅ **100% TypeScript Coverage** - Full type safety implementation
- ✅ **Modern React Patterns** - Hooks, functional components, and best practices
- ✅ **Scalable Architecture** - Modular and maintainable code structure
- ✅ **Professional UI/UX** - Polished user interface with smooth interactions
- ✅ **Error Resilience** - Comprehensive error handling and recovery
- ✅ **Performance Optimized** - Efficient rendering and state management
- ✅ **Cross-Platform Ready** - iOS, Android, and Web compatibility
- ✅ **Production Ready** - Professional-grade code quality and standards
- ✅ **WCAG 2.1 AA Compliant** - Full accessibility compliance and inclusive design
- ✅ **Screen Reader Compatible** - Complete VoiceOver/TalkBack support
- ✅ **Assistive Technology Ready** - Support for various accessibility tools

---

**Built with ❤️ using React Native, TypeScript, and Expo**