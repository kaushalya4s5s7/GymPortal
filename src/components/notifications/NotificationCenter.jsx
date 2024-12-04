import React, { useState } from "react";
import { format } from "date-fns";

const NotificationCenter = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: "renewal",
      message: "John Doe's membership expires in 7 days",
      date: new Date(),
      read: false,
    },
    {
      id: 2,
      type: "attendance",
      message: "Unusual attendance pattern detected for Jane Smith",
      date: new Date(Date.now() - 86400000),
      read: true,
    },
  ]);

  const getNotificationStyle = (type, read) => {
    const baseStyle = "p-4 rounded-lg mb-4 border-l-4";
    const readStyle = read ? "bg-gray-50" : "bg-white";

    switch (type) {
      case "renewal":
        return `${baseStyle} ${readStyle} border-yellow-500`;
      case "attendance":
        return `${baseStyle} ${readStyle} border-blue-500`;
      default:
        return `${baseStyle} ${readStyle} border-gray-500`;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <p className="text-gray-600">
          Stay updated with important gym activities
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={getNotificationStyle(
              notification.type,
              notification.read
            )}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">
                  {notification.message}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {format(notification.date, "PPp")}
                </p>
              </div>
              {!notification.read && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  New
                </span>
              )}
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;
