import { EventEmitter } from 'events';

const tracker = new EventEmitter();

export const startDeliveryTracking = (orderId: string) => {
  const statuses = ['Accepted', 'Preparing', 'On the way', 'Completed'];
  let index = 0;

  const interval = setInterval(() => {
    if (index >= statuses.length) {
      tracker.emit('statusUpdate', { orderId, status: 'Completed' });
      clearInterval(interval);
      return;
    }

    tracker.emit('statusUpdate', { orderId, status: statuses[index] });
    index += 1;
  }, 4000);

  return () => clearInterval(interval);
};

export const onStatusUpdate = (listener: (data: any) => void) => {
  tracker.on('statusUpdate', listener);
  return () => tracker.removeListener('statusUpdate', listener);
};
