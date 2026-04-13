// Performance monitoring utilities

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  loadTime: number; // Page load time
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.setupObservers();
    }
  }

  private setupObservers() {
    // Observe paint timing
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
        }
        if (entry.name === 'largest-contentful-paint') {
          this.metrics.lcp = entry.startTime;
        }
      }
    });

    paintObserver.observe({ type: 'paint', buffered: true });

    // Observe layout shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.cls = clsValue;
    });

    clsObserver.observe({ type: 'layout-shift', buffered: true });

    this.observers.push(paintObserver, clsObserver);
  }

  // Measure page load time
  measurePageLoad() {
    if (typeof window !== 'undefined') {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.navigationStart;
      }
    }
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics {
    return {
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      loadTime: this.metrics.loadTime || 0,
    };
  }

  // Log metrics to console (in production, send to analytics)
  logMetrics() {
    const metrics = this.getMetrics();
    console.log('Performance Metrics:', metrics);
    
    // Send to analytics service if needed
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'performance',
        fcp: Math.round(metrics.fcp),
        lcp: Math.round(metrics.lcp),
        cls: Math.round(metrics.cls * 1000) / 1000,
        load_time: Math.round(metrics.loadTime),
      });
    }
  }

  // Cleanup observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

// React component performance hook
export const useRenderPerformance = (componentName: string) => {
  const renderCount = React.useRef(0);
  const lastRenderTime = React.useRef(Date.now());

  React.useEffect(() => {
    renderCount.current += 1;
    const now = Date.now();
    const timeSinceLastRender = now - lastRenderTime.current;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} render #${renderCount.current}, time since last: ${timeSinceLastRender}ms`);
    }
    
    lastRenderTime.current = now;
  });

  return renderCount.current;
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
    };
  }
  return null;
};

// Network performance monitoring
export const measureNetworkPerformance = (url: string) => {
  const startTime = performance.now();
  
  return fetch(url)
    .then(response => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      console.log(`Network request to ${url} took ${duration.toFixed(2)}ms`);
      
      return {
        response,
        duration,
        size: response.headers.get('content-length'),
      };
    })
    .catch(error => {
      console.error(`Network request to ${url} failed:`, error);
      return null;
    });
};

export { PerformanceMonitor };
export type { PerformanceMetrics };
